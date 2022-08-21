import { Request, Response } from "express";
import { PrismaUsersRepository } from "../../../repositories/prisma/PrismaUsersRepository"
import { UpdateUserUsecase } from "../../../usecases/user/UpdateUserUsecase"

export default class UpdateUserController {
    static async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const prismaUsersRepository = new PrismaUsersRepository()
            const updateUserUsecase = new UpdateUserUsecase(
                prismaUsersRepository
            )

            const {
                newFullName,
                newUsername,
                newPassword
            } = request.body

            const newUserData = await updateUserUsecase.execute({
                id,
                newFullName,
                newUsername,
                newPassword })
                
            return response.status(202).json({
                message: "User updated",
                updated: newUserData
            })
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(
                    error.message
                )
            }
        }
    }
}