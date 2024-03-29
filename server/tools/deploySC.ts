import { exec } from 'child_process';
import {getCurrentVersion, incrementMinorVersion} from '../version'

  
async function deploySC(): Promise<string> {
    const proxyAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
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