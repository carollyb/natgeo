import { usersRepository } from "../../../server";
import { AuthenticateUserUsecase } from "../../../usecases/auth/AuthenticateUserUsecase";

export class AuthenticateUserController {
  static async handle(request: any) {
    const authenticateUserUsecase = new AuthenticateUserUsecase(
      usersRepository
    )
    try {
      const { username, password } = request
      const user = await authenticateUserUsecase.execute({ username, password })
      return user
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
    }
  }
}

