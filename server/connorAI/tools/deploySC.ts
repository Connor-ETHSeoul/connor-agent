import { exec } from 'child_process';
import {getCurrentVersion} from '../../version'
import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });



const proxyAddress = process.env.PROXY_ADDRESS || "0xdf9bf7F4Be89647c60Ac8BbAac834285Bf76DC6f";

async function deploySC(): Promise<string> {
    const toVersion = getCurrentVersion()
    exec(`cd .. && yes | PROXY_ADDRESS=${proxyAddress} UPGRADE_TO_VERSION=${toVersion} npx hardhat run scripts/upgradeProxy.ts --network sepolia`, (error, stdout, stderr) => {
    if (error) {
    console.error(`exec error: ${error}`);
    return;
    }
    console.log(`Command output: ${stdout}`);
    });
    return "Deployed";
  }

export { deploySC };