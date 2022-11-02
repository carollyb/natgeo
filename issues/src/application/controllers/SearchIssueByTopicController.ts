import { Request, Response } from "express";
import { issuesRepository } from "../../server";
import { SearchIssueByTopicUsecase } from "../../usecases/issues/SearchIssueByTopicUsecase";

type Query = {
    topic: string
}
export class SearchIssueByTopicController {
    static async handle(request: Request, response: Response) {
        const searchIssueByTopicUsecase = new SearchIssueByTopicUsecase(
            issuesRepository
        )
        try {
            const { topic } = request.query as unknown as Query
            const issuesByTopic = await searchIssueByTopicUsecase.execute(topic)
            return issuesByTopic
        } catch (error) {
            if (error instanceof Error) {
                return error.message
            }
        }
    }
}