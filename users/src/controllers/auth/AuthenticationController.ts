import { Request, Response } from "express";
import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository"
import {AuthenticateUserUsecase } from "../../usecases/user/AuthenticateUserUsecase"

export default class AuthenticationController {
    static async handle(request: Request, response: Response) {
        const { username, password } = request.body
        try {
            const prismaUsersRepository = new PrismaUsersRepository()
            const authenticateUserUsecase = new AuthenticateUserUsecase(
                prismaUsersRepository
            )
            
            const token = await authenticateUserUsecase.execute({username, password});

            return response.status(200).json({
                token: token,
                username: username
            })
        } catch (error) {
            response.status(400).json({
                error
            })
        }
    }
}