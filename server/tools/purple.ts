import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import {readContract, upgradeProxyContract} from '../utils'
import {getCurrentVersion} from '../version'

import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

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
        console.log("Agent Purple is checking the contract, policy alignment \n")
        const currenvt = getCurrentVersion();
        const fileData = await readContract(currenvt);
        const result = await chain.invoke({ code: fileData, policy: policy}); // 읽은 데이터를 사용
        
        const feedback = result.content as string;

        console.log("Agent Purple feedback on code <> policy alignment: \n")
        console.log(feedback);

        return feedback;

    } catch (error) {
        console.error("An error occurred:", error);
        return "";
    }
}

export { runPurple }
