import {runBlue}  from "./blue";
import {runGreen}  from "./green";
import {runPurple}  from "./purple";
import {runRed}  from "./red";
import {deploySC}  from "./deploySC";
import { DynamicTool } from "@langchain/core/tools";


const runBlueTool = new DynamicTool({
    name: "runBlue",
    description: "Get the new smart contract code from Agent Blue according to the new DAO policy",
    func: runBlue,
    }
  );
  
  const runPurpleTool = new DynamicTool({
    name: "runPurple",
    description: "Get feedback from Agent Purple on the new smart contract code if it meets the new DAO policy",
    func: runPurple,
    }
  );
  
  const runRedTool = new DynamicTool({
    name: "runRed",
    description: "Get feedback from Agent Red on the new smart contract code if it has any security risks",
    func: runRed,
    }
  );
  
  const runGreenTool = new DynamicTool({
    name: "runGreen",
    description: "Refine the smart contract code if it does not meet the new DAO policy or has security risks",
    func: runGreen,
    }
  );
  
  const deploySCTool = new DynamicTool({
    name: "deploySC",
    description: "Deploy the new smart contract",
    func: deploySC,
    }
  );

  export {runBlueTool, runGreenTool, runPurpleTool, runRedTool, deploySCTool}