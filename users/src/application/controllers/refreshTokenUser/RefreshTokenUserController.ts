import { Request, Response } from 'express'
import { PrismaUsersRepository } from '../../../repositories/prisma/PrismaUsersRepository'
import RefreshTokenUserUseCase from '../../../usecases/refreshTokenUser/RefreshTokenUserUseCase'

export default class RefreshTokenUserController {
  static async handle(request: Request, response: Response) {
    try {
      const { refresh_token } = request.body
      const prismaUsersRepository = new PrismaUsersRepository()
      const refreshTokenUserUseCase = new RefreshTokenUserUseCase(
        prismaUsersRepository
      )
      const { token } = await refreshTokenUserUseCase.execute(refresh_token)
      return response.status(200).json(token)
    } catch(error: unknown) {
      response.status(400).json(error)
    }
  }
}