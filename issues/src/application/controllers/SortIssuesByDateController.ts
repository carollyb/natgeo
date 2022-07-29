import { Request, Response } from "express";
import { issuesRepository } from "../../server";
import { SortIssuesByDateUsecase } from "../../usecases/SortIssuesByDateUsecase";

type Query = {
    type: string
}
export default class SortIssuesByDateController {
    static async handle(request: Request, response: Response) {
        const sortIssuesByDateUsecase = new SortIssuesByDateUsecase(
            issuesRepository
            )
            
        try {
            const { type } = request.query as unknown as Query
            const issuesByDate = await sortIssuesByDateUsecase.execute(type)
            return response.status(200).json(issuesByDate)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
        }

    }
}