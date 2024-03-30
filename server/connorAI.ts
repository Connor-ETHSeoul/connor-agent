import { ChatOpenAI } from "@langchain/openai";
import { convertToOpenAIFunction } from "@langchain/core/utils/function_calling";
import { AgentExecutor, type AgentStep } from "langchain/agents";
import { RunnableSequence } from "@langchain/core/runnables";
import { formatToOpenAIFunctionMessages } from "langchain/agents/format_scratchpad";
import { OpenAIFunctionsAgentOutputParser } from "langchain/agents/openai/output_parser";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import {BaseMessage } from "@langchain/core/messages";

import { runBlueTool, runGreenTool, runRedTool, runPurpleTool, deploySCTool, readContractTool } from "./tools";

import * as dotenv from 'dotenv';
import { readContract } from "./utils";

dotenv.config({ path: '../.env' });

const chatHistory: BaseMessage[] = [];

const MEMORY_KEY = "chat_history";

const prompt = ChatPromptTemplate.fromMessages([
  ["system", 
  `You are Agent Black. 
  You are an AI system designed to execute DAOs proposal and upgrade smart contracts according to the new policy.
  You are responsible for deploying the new smart contract version.
  You have three other agents and a set of tools: Agent Blue, Agent Purple, and Agent Red, Agent Green and DeployContract, ReadContract tool.
  You must execute the following steps:
  1. Receive the new smart contract solidity code from Agent Blue, by running the runBlue tool.
  2. Agent Purple  will provide feedback on the new smart contract, whether it meets the policy.
  If the new smart contract code does not meet the DAO's policy, refine the smart contract code by running the "runGreen" tool and check again.
  Otherwise, go straight to step 3.
  3. Agent Red will provide feedback on the smart contract, whether it has security risks.
  If the new smart contract code has security risks, refine the smart contract code by running the "runGreen" tool and check again.
  Otherwise, go straight to step 4.
  4. Deploy the new smart contract by running the deploySC tool.
  Note that all agents have access to the contract code, so you do not have to pass it to them.
  `],
  new MessagesPlaceholder(MEMORY_KEY),
  ["human", "{input}"],
  new MessagesPlaceholder("agent_scratchpad"),
]);

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Initialize the model
const model = new ChatOpenAI({
    openAIApiKey: OPENAI_API_KEY,
    modelName: "gpt-4", //use gpt-4 model
    temperature: 0
  }); 

const tools = [runBlueTool, runPurpleTool, runRedTool, runGreenTool, deploySCTool, readContractTool];

const modelWithFunctions = model.bind({
  functions: tools.map((tool) => convertToOpenAIFunction(tool)),
});

const runnableAgent = RunnableSequence.from([
  {
    input: (i) => i.input,
    agent_scratchpad: (i) => formatToOpenAIFunctionMessages(i.steps),
    chat_history: (i) => i.chat_history,
  },
  prompt,
  modelWithFunctions,
  new OpenAIFunctionsAgentOutputParser(),
]);

const executor = AgentExecutor.fromAgentAndTools({
  agent: runnableAgent,
  tools,
});

// executor.invoke 함수를 호출하는 부분을 async 함수로 감싸기
async function executeContract() {
  // await를 사용하여 readContract의 결과를 기다린 후 contractCode에 할당
  // 이제 contractCode를 string으로 사용할 수 있음
  executor.invoke({ input: `New policy: You cannot stab the elderly`, chat_history: chatHistory })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      // 오류 처리
      console.error("Error executing contract:", error);
    });
}

// 함수 실행
executeContract();
