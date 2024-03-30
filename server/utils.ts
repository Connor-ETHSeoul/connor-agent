import { writeFile, readFile } from 'fs/promises';
import { exec } from 'child_process';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function readContract(version:string) {
    try {
        const data = await readFile(`../contracts/Game/ImplementationV${version}.sol`, 'utf8');
        return data; // 데이터 반환
    } catch (error) {
        console.error('Error while reading file', error);
        throw error; // 에러를 다시 던져서 외부에서 처리할 수 있게 함
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

async function uploadAgentOutput(proposalId: number, color: string, text: string): Promise<void> {
    const agentOutput = await prisma.agent_output.create({
        data: {
            proposalId,
            color,
            text
        }
    });
}

export { readContract, upgradeProxyContract, uploadAgentOutput };
