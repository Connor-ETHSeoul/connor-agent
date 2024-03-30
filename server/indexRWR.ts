import { runWithoutRed } from  "./connorAI/run-without-red"
import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import {ethers} from 'ethers'

const SEPOLIA_WEBSOCKET_URL = process.env.SEPOLIA_WEBSOCKET_URL 
const DAO_CONTRACT_ADDRESS = process.env.DAO_CONTRACT_ADDRESS

const provider = new ethers.providers.WebSocketProvider(SEPOLIA_WEBSOCKET_URL!);
const contractABI = [
    "event PolicyListed(string policy)",
    "function vote (uint policyId, Vote voting) public"
];
const contractAddress = DAO_CONTRACT_ADDRESS!;

const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function main() {
    contract.on('PolicyListed', async (policy: string) => {
        try {
            await runWithoutRed(policy);;
        } catch (error) {
            console.error("Error in event handler:", error);
            throw error; // 에러를 다시 발생시켜 main의 catch 블록에서 처리할 수 있도록 함
        }
    });
  }
  
  main().then(() => {
    console.log("Event listening operation completed");
  }).catch((error) => {
    console.error("An error occurred during event listening:", error);
  });