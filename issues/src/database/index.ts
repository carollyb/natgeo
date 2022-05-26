import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

//export default prisma

async function main() {
    await prisma.$connect()
    const allIssues = await prisma.issue.findMany()
    console.log(allIssues)
}
main()
.catch((e) => {
    throw e
})
.finally(async () => {
    await prisma.$disconnect()
})