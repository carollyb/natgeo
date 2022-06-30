import { Request, Response } from "express";
import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository"
import { DeleteUserUsecase } from "../../usecases/user/DeleteUserUsecase"

export default class DeleteUserController {
    static async handle(request: Request, response: Response) {
        try {
            const { id } = request.params
            const prismaUsersRepository = new PrismaUsersRepository()
            const deleteUserUsecase = new DeleteUserUsecase(
                prismaUsersRepository
            )
            const deletedUser = await deleteUserUsecase.execute({id})
            return response.status(202).json(deletedUser)
        } catch (error) {
            return response.status(400).json(
                error
            )
        }
    }
}