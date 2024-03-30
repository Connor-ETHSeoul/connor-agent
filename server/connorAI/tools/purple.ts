import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import {readContract} from './utils'
import {getCurrentVersion} from '../../version'
import { PrismaClient } from '../../../prisma/generated/client';


import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const prisma = new PrismaClient();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const promptTemplate = PromptTemplate.fromTemplate(
  `You will be given {policy}, and {code}. 
  You check whether the policy aligns with the solidity code.
  Give the feedback about the policy aligns with the solidity code or not.`
);

const model = new ChatOpenAI({
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-4", //use gpt-4 model
  temperature: 0
});

const chain = promptTemplate.pipe(model);

async function runPurple(policy:string): Promise<string> {
    try {
        console.log("Agent Purple is checking the contract & policy alignment \n")
        
        const currenvt = getCurrentVersion();
        const fileData = await readContract(currenvt);
        const result = await chain.invoke({ code: fileData, policy: policy}); // 읽은 데이터를 사용
        
        const feedback = result.content as string;

        await prisma.agent_output.create({
            data: {
                proposalId: 0,
                color: "black",
                text: "Agent Purple is checking the contract & policy alignment... \n"
            }
        });


        await prisma.agent_output.create({
          data: {
              proposalId: 0,
              color: "purple",
              text: "Agent Purple's feedback on contract & policy alignment: \n" + feedback 
          }
      });

        console.log("Agent Purple's feedback on contract & policy alignment: \n")
        console.log(feedback + "\n");

        return feedback;

    } catch (error) {
        console.error("An error occurred:", error);
        return "";
    }
}

export { runPurple }
