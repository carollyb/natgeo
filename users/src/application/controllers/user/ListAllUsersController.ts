import { Request, Response } from "express"
import { PrismaUsersRepository } from "../../../repositories/prisma/PrismaUsersRepository"
import { ListAllUsersUsecase } from "../../../usecases/user/ListAllUsersUsecase"

export default class ListAllUsersController {
    static async handle(request: Request, response: Response) {
        const prismaUsersRepository = new PrismaUsersRepository()
        const listAllUsersUsecase = new ListAllUsersUsecase(
            prismaUsersRepository
            )
        try {
            const results = await listAllUsersUsecase.execute()
            return response.status(200).json(
                results
            )
        } catch (error) {
            return response.status(400).json({
                error: `Não pôde encontrar users`
            })
        }
    }
}