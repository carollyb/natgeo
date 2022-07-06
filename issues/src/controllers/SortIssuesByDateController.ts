import { Request, Response } from "express";
import { PrismaIssuesRepository } from "../repositories/prisma/PrismaIssuesRepository";
import { SortIssuesByDateUsecase } from "../usecases/SortIssuesByDateUsecase";

export default class SortIssuesByDateController {
    static async handle(request: Request, response: Response) {
        
        const prismaIssuesRepository = new PrismaIssuesRepository()
        const sortIssuesByDateUsecase = new SortIssuesByDateUsecase(
            prismaIssuesRepository
            )
            
        try {
            const { type } = request.query
            const issuesByDate = await sortIssuesByDateUsecase.execute(type)
            return response.status(200).json(issuesByDate)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
        }

    }
}