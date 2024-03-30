import { exec } from 'child_process';
import {getCurrentVersion} from '../../version'
import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
import { PrismaClient } from '../../../prisma/generated/client';
const prisma = new PrismaClient();

const proxyAddress = process.env.PROXY_ADDRESS || "0xdf9bf7F4Be89647c60Ac8BbAac834285Bf76DC6f";

async function deploySC(): Promise<string> {
  const toVersion = getCurrentVersion(); // getCurrentVersion() 함수의 정의가 필요

  try {
      // execAsync를 사용하여 비동기적으로 스크립트 실행
      await exec(`cd .. && yes | PROXY_ADDRESS=${proxyAddress} UPGRADE_TO_VERSION=${toVersion} npx hardhat run scripts/upgradeProxy.ts --network sepolia`);
      console.log("Deployed new version: " + toVersion);

      // 데이터베이스에 로그를 저장
      await prisma.agent_output.create({
          data: {
              proposalId: 0,
              color: "black",
              text: "Deployed new version: " + toVersion
          }
      });

      return "Deployed";
  } catch (error) {
      console.error(`Execution error: ${error}`);
      return "Deployment Failed";
  }
}

export { deploySC };