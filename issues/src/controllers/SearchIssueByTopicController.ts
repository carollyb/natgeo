import { Request, Response } from "express";
import { PrismaIssuesRepository } from "../repositories/prisma/PrismaIssuesRepository";
import { SearchIssueByTopicUsecase } from "../usecases/SearchIssueByTopicUsecase";

interface Query {
    topic: string
}

export default class SearchIssueByTopicController {
    static async handle(request: Request, response: Response) {
        const prismaIssuesRepository = new PrismaIssuesRepository();
        const searchIssueByTopicUsecase = new SearchIssueByTopicUsecase(
            prismaIssuesRepository
        )
        try {
            const { topic } = request.query as unknown as Query
            const issuesByTopic = await searchIssueByTopicUsecase.execute(topic)
            return response.status(200).json(issuesByTopic)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
        }
    }
}