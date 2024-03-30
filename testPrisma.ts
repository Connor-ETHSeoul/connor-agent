import { PrismaClient } from './prisma/generated/client';

const prisma = new PrismaClient();

async function fetchAgentOutputs() {
    const agentOutputs = await prisma.agent_output.findMany();
    return agentOutputs;
}

// 함수 사용 예시
async function runFetch() {
    try {
        const agentOutputs = await fetchAgentOutputs();
        console.log(agentOutputs);
    } catch (error) {
        console.error('Error fetching agent_outputs:', error);
    }
}

runFetch();
