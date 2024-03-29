import { ethers } from 'ethers';
import { DAO_CONTRACT_ADDRESS, provider } from './setup';

const contractABI = [
  "event Event(string message)",
  "function test() public"
];

export const contract = new ethers.Contract(DAO_CONTRACT_ADDRESS, contractABI, provider);
