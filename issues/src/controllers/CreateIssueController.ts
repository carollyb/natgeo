import { Request, Response } from "express"
import { PrismaIssuesRepository } from "../infra/repositories/PrismaIssuesRepository";
import { CreateIssueUsecase } from "../usecases/CreateIssueUsecase"

export default class CreateIssueController {
    static async handle(request: Request, response: Response) {

        const {
            number,
            date,
            cover,
            file,
            language,
            topics
        } = request.body

        try {
            const prismaIssuesRepository = new PrismaIssuesRepository()
            const createIssueUsecase = new CreateIssueUsecase(
                prismaIssuesRepository
            )
            const issue = await createIssueUsecase.execute({
                number,
                date,
                cover,
                file,
                language,
                topics
            })

            return response.status(201).json(
                issue
            )
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({
                    error: error.message
                })
            }
        }
    }
}