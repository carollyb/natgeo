import { Request, Response } from "express";
import { issuesRepository } from "../../server";
import { SearchIssueByDateRangeUsecase } from "../../usecases/SearchIssueByDateRangeUsecase";

export default class SearchIssueByDateRangeController {
    static async handle(request: Request, response: Response) {
        const searchIssueByDateRangeUsecase = new SearchIssueByDateRangeUsecase(
            issuesRepository
        )
        try {
            const { startDate, endDate } = request.query
            const issuesInDateRange = await searchIssueByDateRangeUsecase.execute(
                { 
                    startDate,
                    endDate }
            )

            return response.status(200).json(
                issuesInDateRange
            )
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
        }
    }
}