import { Request, Response } from "express"
import { PrismaUsersRepository } from "../repositories/prisma/PrismaUsersRepository";
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
            const prismaUsersRepository = new PrismaUsersRepository()
            const createIssueUsecase = new CreateIssueUsecase(
                prismaUsersRepository
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