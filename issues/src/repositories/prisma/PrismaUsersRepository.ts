import prisma from "../../database/index"
import { IssuesRepository, Issue, IssuesRepositoryData } from "../IssuesRepository"

export class PrismaUsersRepository implements IssuesRepository {

    async create({ number, date, cover, file, language, topics }: IssuesRepositoryData) {
        
        const issue = await prisma.issue.create({
            data: {
                number: number,
                date: date,
                cover: cover,
                file: file,
                language: language,
                topics: topics
            }
        })
        return issue
    }


    async listAllIssues() {
        const allIssues = await prisma.issue.findMany()
        return allIssues
    }
}