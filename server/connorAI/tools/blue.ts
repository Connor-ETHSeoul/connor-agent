import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { readContract, writeContract } from "./utils";
import { getCurrentVersion, incrementMinorVersion } from "../../version";
import { PrismaClient } from "../../../prisma/generated/client";
const prisma = new PrismaClient();

require('dotenv').config({ path: "../../../.env" });


const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const promptTemplate = PromptTemplate.fromTemplate(
  `I want to change the Solidity Code.
  The existing code is {originalFile}

  This is the requirement for new Solidity code: 
  Change the name of contract function from ImplementationV_1_n_X ImplementationV_1_n+1_X to contract.
  Only change the number part n, and X is the given original number.
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
  temperature: 0,
});

const chain = promptTemplate.pipe(model);

async function writeSC(newPolicy: string): Promise<string> {
  try {
    const currenvt = getCurrentVersion();
    const fileData = await readContract(currenvt);

    const result = await chain.invoke({
      originalFile: fileData,
      policy: newPolicy,
    }); // 읽은 데이터를 사용
    const newSC = result.content as string;

    return newSC;
  } catch (error) {
    console.error("An error occurred:", error);
    return "";
  }
}

async function runBlue(newPolicy: string): Promise<string> {
  console.log("Agent Blue is writing new contract \n");

  const newSC: string = await writeSC(newPolicy);

  console.log("Agent Blue's new smart contract code: \n");
  console.log(newSC + "\n");

  await prisma.agent_output.create({
    data: {
      proposalId: 0,
      color: "black",
      text: "Agent Blue is writing the new contract... \n ",
    },
  });

  await prisma.agent_output.create({
    data: {
      proposalId: 0,
      color: "blue",
      text: " Agent Blue's new smart contract code: \n" + newSC,
    },
  });

  incrementMinorVersion();
  const curvt = getCurrentVersion();
  await writeContract(curvt, newSC);

  await prisma.smart_contract.create({
    data: {
      version: curvt,
      code: newSC,
    },
  });
  return newSC;
}

export { runBlue };
