import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import {readContract, writeContract} from '../../utils'
import { writeFile } from 'fs/promises';
import {getCurrentVersion, incrementPatchVersion} from '../../version'
import { PrismaClient } from '../../../prisma/generated/client';


import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const prisma = new PrismaClient();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const promptTemplate = PromptTemplate.fromTemplate(
    `I want to change the Solidity Code.
    The existing code is {originalFile}
  
    This is the requirement for new Solidity code: 
    Change the contract so that according to the {feedback}.
    You can only change the part that starts with
    "//AI CODE STARTS HERE" and ends with "//AI CODE ENDS HERE".
    Change the contract function name from Implementation_V_1_X_N to Implementation_V_1_X_N+1
    Only change the value of N, increment 1, X is the given number, do not change the number
    Please give me the full entire code.
  
    I need a straightforward Solidity code snippet that satisfies the requirements. 
    Please provide only the raw code, 
    without any additional explanations or instructions.`
);

const model = new ChatOpenAI({
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-4", //use gpt-4 model
  temperature: 0.1
});

  
const chain = promptTemplate.pipe(model);

async function refineSC(feedback:string): Promise<string> {
    try {
        const currenvt = getCurrentVersion();
        const fileData = await readContract(currenvt);

        const result = await chain.invoke({ originalFile: fileData, feedback: feedback}); // 읽은 데이터를 사용
        
        const newCode = result.content as string;



        return newCode;

    } catch (error) {
        console.error("An error occurred:", error);
        return "";
    }
}

async function runGreen(newPolicy: string): Promise<string> {
    console.log("Agent Green is refining the contract... \n")

    const newSC :string = await refineSC(newPolicy);

    console.log("Agent Green's refined code: \n")
    console.log(newSC);

    await prisma.agent_output.create({
        data: {
            proposalId : 0,
            color : "black",
            text: "Agent Green is refining the contract \n"
        }
    });

    await prisma.agent_output.create({
        data: {
            proposalId : 0,
            color : "green",
            text: "Agent Green's refined code: \n" + newSC
        }
    });


    incrementPatchVersion();
    const curvt = getCurrentVersion();
    await writeContract(curvt, newSC);

    await prisma.smart_contract.create({
        data: {
            version: curvt,
            code: newSC
        }
    });

    return newSC;
}
  
  export {runGreen}
  