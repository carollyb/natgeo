import { usersRepository } from "../../../server";
import { CreateUserUsecase } from "../../../usecases/users/CreateUserUseCase";

export class CreateUserController {
  static async handle(request: any) {
    const createUserUsecase = new CreateUserUsecase(
      usersRepository
    )
    const {
      full_name,
      username,
      password
    } = request
    try {
      const user = await createUserUsecase.execute({
        full_name,
        username,
        password
      })
      
      return user
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
    }
  }
}

