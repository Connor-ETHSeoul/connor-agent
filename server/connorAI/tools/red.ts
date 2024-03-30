import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import {readContract} from './utils'
import {getCurrentVersion} from '../../version'
import { PrismaClient } from '../../../prisma/generated/client';


import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const prisma = new PrismaClient(); 

const promptTemplate = PromptTemplate.fromTemplate(
  `You should check whether the security issue exist in the solidity code. 
  Modified code is given, and you should check the security issue according to SCSVS (Smart Contract Security Verification Standard).
  1. Verify that the every introduced design change is preceded by an earlier threat modelling.
  2. Verify that the documentation clearly and precisely defines all trust boundaries in the contract.
  3. Verify that the SCSVS, security requirements or policy is available to all developers and testers.
  4. Verify that there exists an upgrade process for the contract which allows to deploy the security fixes.
  5. Verify that there is a component that monitors the contract activity using events.
  6. Verify that there exists a mechanism that can temporarily stop the sensitive functionalities of the contract in case of a new attack. This mechanism should not block access to the assets.
  7. Verify that there is a policy to track new security bugs and to update the libraries to the latest secure version.
  8. Verify that the value of cryptocurrencies kept on contract is controlled and at the minimal acceptable level.
  9. Verify that if the fallback function can be called by anyone it is included in the threat modelling.
  10. Verify that the business logic in contracts is consistent. Important changes in the logic should be allowed for all or none of the contracts.
  11. Verify that code analysis tools are in use that can detect potentially malicious code.
  12. Verify that the latest version of Solidity is used.
  {code}
  If there exists the error about the security, give the security issue feedback.`
);

const model = new ChatOpenAI({
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-4", //use gpt-4 model
  temperature: 0
});

const chain = promptTemplate.pipe(model);

async function runRed(): Promise<string> {
    try {
        console.log("Agent Red is checking the contract for security risks \n")
        
        const currentVersion = getCurrentVersion();
        const fileData = await readContract(currentVersion);
      
        const result = await chain.invoke({ code: fileData}); // 읽은 데이터를 사용
        const feedback = result.content as string;

        console.log("Agent Red's feedback on security: \n")
        console.log(feedback + "\n");

        await prisma.agent_output.create({
            data: {
                proposalId: 0,
                color: "black",
                text: "Agent Red is checking the contract for security risks... \n"
            }
        });

        await prisma.agent_output.create({
          data: {
              proposalId: 0,
              color: "red",
              text: "Agent Red's feedback on security: \n" + feedback 
          }
      });
        return feedback;

    } catch (error) {
        console.error("An error occurred:", error);
        return "";
    }
}


export { runRed }
