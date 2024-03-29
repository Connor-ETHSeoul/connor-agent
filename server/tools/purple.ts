import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import {readContract, upgradeProxyContract} from '../utils'
import {getCurrentVersion} from '../version'

import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const promptTemplate = PromptTemplate.fromTemplate(
  `You will be given {policy}, and {modified_input}. 
  You check whether the policy aligns in the modified codes.
  Give the feedback about the policy aligns in the modified codes or not.`
);

const model = new ChatOpenAI({
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-4", //use gpt-4 model
  temperature: 0
});

const chain = promptTemplate.pipe(model);

async function runPurple(policy:string): Promise<string> {
    try {
        const currenvt = getCurrentVersion();
        const fileData = await readContract(currenvt);
        const result = await chain.invoke({ modified_input: fileData, policy: policy}); // 읽은 데이터를 사용
        
        console.log(result);

        const feedback = result.content as string; // RED or BLUE
        return feedback;

    } catch (error) {
        console.error("An error occurred:", error);
        return "";
    }
}

export { runPurple }
