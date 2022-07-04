import prisma from "../../database/index"
import { IssuesRepository } from "../IssuesRepository"

export class PrismaUsersRepository implements IssuesRepository {
    async listAllIssues() {
        const allIssues = await prisma.issue.findMany()
        return allIssues
    }
}