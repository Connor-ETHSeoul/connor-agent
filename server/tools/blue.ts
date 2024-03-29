import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { writeFile } from 'fs/promises';
import {readContract, upgradeProxyContract} from '../utils'
import {PROXY_ADDRESS, DAO_POLICY} from '../../config'
import {getCurrentVersion, incrementMinorVersion} from '../version'

import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const promptTemplate = PromptTemplate.fromTemplate(
  `I want to change the Solidity Code.
  The existing code is {originalFile}

  This is the requirement for new Solidity code: 
  Change the contract name from ImplementationV[n-1] to ImplementationV[n], where n-1 and n are integers.
  Change the contract so that is meets the new {policy}.
  You can only change the part that starts with
  "//AI CODE STARTS HERE" and ends with "//AI CODE ENDS HERE".
  Please give me the full entire code.

  I need a straightforward Solidity code snippet that satisfies the requirements. 
  Please provide only the raw code, 
  without any additional explanations or instructions.`
);

const model = new ChatOpenAI({
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-4", //use gpt-4 model
  temperature: 0
});

const chain = promptTemplate.pipe(model);

async function writeSC(newPolicy:string): Promise<string> {
    try {
        const currenvt = getCurrentVersion();
        const fileData = await readContract(currenvt);
        console.log("읽은 파일의 내용:", fileData);

        const result = await chain.invoke({ originalFile: fileData, policy: DAO_POLICY}); // 읽은 데이터를 사용
        
        console.log(result);

        const newSC = result.content as string;
        return newSC;

    } catch (error) {
        console.error("An error occurred:", error);
        return "";
    }
}

async function runBlue(newPolicy: string): Promise<string> {
    const newSC :string = await writeSC(newPolicy);
    incrementMinorVersion();
    const curvt = getCurrentVersion();
    const filePath = `../contracts/Game/ImplementationV${curvt}.sol`;
    await writeFile(filePath, newSC);
    return newSC;
}

export {runBlue}
