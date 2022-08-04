import { Request, Response } from "express";
import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository"
import { SortUsersByUsernameUsecase } from "../../usecases/user/SortUsersByUsernameUsecase"

export default class SortUsersByUsernameController {
    static async handle(request: Request, response: Response) {
        const prismaUsersRepository = new PrismaUsersRepository()
        const sortUsersByUsernameUsecase = new SortUsersByUsernameUsecase(prismaUsersRepository)
        try {
            const { type } = request.query
            const sortedUsers = await sortUsersByUsernameUsecase.execute(type)
            return response.status(200).json(sortedUsers)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}