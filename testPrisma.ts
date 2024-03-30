import { PrismaClient } from './prisma/generated/client';

const prisma = new PrismaClient();

async function fetchAgentOutputs() {
    const agentOutputs = await prisma.agent_output.findMany();
    console.log(agentOutputs);
    return agentOutputs;
}

fetchAgentOutputs();

