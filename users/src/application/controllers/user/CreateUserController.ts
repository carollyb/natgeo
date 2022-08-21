import { Request, Response } from "express"
import { PrismaUsersRepository } from "../../../repositories/prisma/PrismaUsersRepository"
import { CreateUserUsecase } from "../../../usecases/user/CreateUserUsecase"

export default class CreateUserController {
    static async handle(request: Request, response: Response) {
        const { full_name, username, password } = request.body
        try {
            const prismaUsersRepository = new PrismaUsersRepository()
            const createUserUsecase = new CreateUserUsecase(
                prismaUsersRepository
            )

            const user = await createUserUsecase.execute(
                {
                    full_name,
                    username,
                    password
                }
            )
            
            return response.status(201).json(user)
        } catch (error) {
            response.status(400).json({
                error
            })
        }
    }
}