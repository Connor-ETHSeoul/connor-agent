import {runBlue}  from "./blue";
import {runGreen}  from "./green";
import {runPurple}  from "./purple";
import {runRed}  from "./red";
import {deploySC}  from "./deploySC";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";


const runBlueTool = new DynamicStructuredTool({
    name: "runBlue",
    description: "Get the new smart contract code from Agent Blue according to the new DAO policy",
    schema: z.object({
      daoPolicy: z.string().describe("Policy from DAO")
    }),
    func: async ({daoPolicy}) => runBlue(daoPolicy)
    }
  );
  
  const runPurpleTool = new DynamicStructuredTool({
    name: "runPurple",
    description: "Get feedback from Agent Purple on the new smart contract code if it meets the new DAO policy",
    schema: z.object({
      daoPolicy: z.string().describe("Policy from DAO"),
    }),
    func: async ({daoPolicy}) => runPurple(daoPolicy)
    }
  );
  
  const runRedTool = new DynamicStructuredTool({
    name: "runRed",
    description: "Get feedback from Agent Red on the new smart contract code if it has any security risks",
    schema: z.object({
      daoPolicy: z.string().describe("Policy from DAO"),
      modCode: z.string().describe("Source solidity smart contract code")
    }),    
    func: async () => runRed()
    }
  );
  
  const runGreenTool = new DynamicStructuredTool({
    name: "runGreen",
    description: "Refine the smart contract code if it does not meet the new DAO policy or has security risks",
    schema: z.object({
      daoPolicy: z.string().describe("Policy from DAO"),
    }),
    func: async ({daoPolicy}) => runGreen(daoPolicy)
    }
  );
  
  const deploySCTool = new DynamicStructuredTool({
    name: "deploySC",
    description: "Deploy the new smart contract",
    schema: z.object({
      daoPolicy: z.string().describe("Policy from DAO"),
      modCode: z.string().describe("Source solidity smart contract code")
    }),
    func: async () => deploySC()
    }
  );