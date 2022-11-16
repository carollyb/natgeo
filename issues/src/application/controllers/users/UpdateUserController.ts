import { usersRepository } from "../../../server";
import { UpdateUserUsecase } from "../../../usecases/users/UpdateUserUseCase";

export class UpdateUserController {
  static async handle(params: any, body: any) {
    const updateUserUsecase = new UpdateUserUsecase(
      usersRepository
    )
    try {
      const { id } = params
      const user = await updateUserUsecase.execute(id, body)
      return user
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
    }
  }
}

