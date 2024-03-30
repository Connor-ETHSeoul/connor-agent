import { Anthropic } from "@anthropic-ai/sdk";
import { readContract } from "./utils";
import { getCurrentVersion } from "../../version";
import { PrismaClient } from "../../../prisma/generated/client";

require('dotenv').config({ path: "../../../.env" });


const prisma = new PrismaClient();
const CLAUDEAI_API_KEY = process.env.CLAUDEAI_API_KEY;

const anthropic = new Anthropic({
  apiKey: CLAUDEAI_API_KEY,
});

function createPromptTemplate(modFile: string, policy: string): string {
  // Define the structure of your prompt
  const template = `You will be given ${policy}, and ${modFile}. 
  You check whether the policy aligns with the solidity code.
  Give the feedback about the policy aligns with the solidity code or not.`;

  return template;
}

async function runPurple(newPolicy: string): Promise<string> {
  try {
    console.log("Agent Purple is checking the contract & policy alignment \n");
    const currenvt = getCurrentVersion();
    const fileData = await readContract(currenvt);

    const prompt = createPromptTemplate(fileData, newPolicy);

    const result = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    });

    const feedback = result["content"][0]["text"];

    await prisma.agent_output.create({
      data: {
        proposalId: 0,
        color: "black",
        text: "Agent Purple is checking the contract & policy alignment... \n",
      },
    });

    await prisma.agent_output.create({
      data: {
        proposalId: 0,
        color: "purple",
        text:
          "Agent Purple's feedback on contract & policy alignment: \n" +
          feedback,
      },
    });

    console.log("Agent Purple's feedback on contract & policy alignment: \n");
    console.log(feedback + "\n");

    return feedback;
  } catch (error) {
    console.error("An error occured:", error);
    return "";
  }
}

export { runPurple };
