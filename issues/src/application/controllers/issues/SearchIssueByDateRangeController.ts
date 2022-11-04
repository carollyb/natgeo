import { Request, Response } from "express";
import { issuesRepository } from "../../../server";
import { SearchIssueByDateRangeUsecase } from "../../../usecases/issues/SearchIssueByDateRangeUsecase";

export class SearchIssueByDateRangeController {
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

            return issuesInDateRange
        } catch (error) {
            if (error instanceof Error) {
                return error.message
            }
        }
    }
}