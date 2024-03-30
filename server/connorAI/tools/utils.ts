import { readFile, writeFile } from 'fs/promises';
import { exec } from 'child_process';
import * as path from 'path';

async function readContract(version:string) {
    try {
        const filePath = path.join(__dirname, '../../../', 'contracts', 'Game', `ImplementationV${version}.sol`);
        const data = await readFile(filePath, 'utf8');
        return data; // 데이터 반환
    } catch (error) {
        console.error('Error while reading file', error);
        throw error; // 에러를 다시 던져서 외부에서 처리할 수 있게 함
    }
}

async function writeContract(version:string, code:string) {
    try {
        const filePath = path.join(__dirname, '../../../', 'contracts', 'Game', `ImplementationV${version}.sol`);
        console.log('Writing file to', filePath);
        await writeFile(filePath, code);
    }
    catch (error) {
        console.error('Error while writing file', error);
        throw error;
    }
}

  
function upgradeProxyContract(proxyAddress:string, toVersion: string) {
  exec(`cd .. && yes | PROXY_ADDRESS=${proxyAddress} UPGRADE_TO_VERSION=${toVersion} npx hardhat run scripts/upgradeProxy.ts --network sepolia`, (error, stdout, stderr) => {
  if (error) {
  console.error(`exec error: ${error}`);
  return;
  }
  console.log(`Command output: ${stdout}`);
  });
}


export { readContract, writeContract, upgradeProxyContract };
