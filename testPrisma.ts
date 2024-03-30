import { PrismaClient } from './prisma/generated/client';

const prisma = new PrismaClient();

async function fetchAgentOutputs() {
    const agentOutputs = await prisma.agent_output.findMany();
    console.log(agentOutputs);
    return agentOutputs;
}

// 함수 사용 예시
async function deleteAllAgentOutputs() {
    const deleteResult = await prisma.agent_output.deleteMany({});
    console.log(deleteResult);
    // deleteResult는 삭제된 레코드의 수를 포함합니다.
}

// 함수 사용 예시
async function runDelete() {
    try {
        await deleteAllAgentOutputs();
        console.log('All agent_outputs have been deleted.');
    } catch (error) {
        console.error('Error deleting agent_outputs:', error);
    }
}

runDelete();


