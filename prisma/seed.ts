import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'test',
            password: ""
        }
    })
    console.log(user)
};

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {prisma.$disconnect()})