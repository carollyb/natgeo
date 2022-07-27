import { Request, Response } from "express";
import { PrismaIssuesRepository } from "../infra/repositories/PrismaIssuesRepository";
import { SearchIssueByDateRangeUsecase } from "../usecases/SearchIssueByDateRangeUsecase";

type SearchIssueByDateRangeQuery = {
    startDate: any;
    endDate: any;
}

export default class SearchIssueByDateRangeController {
    static async handle(request: Request, response: Response) {
        const prismaIssuesRepository = new PrismaIssuesRepository();
        const searchIssueByDateRangeUsecase = new SearchIssueByDateRangeUsecase(
            prismaIssuesRepository
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