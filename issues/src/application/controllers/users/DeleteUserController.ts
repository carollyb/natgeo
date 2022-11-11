import { usersRepository } from "../../../server";
import { DeleteUserUsecase } from "../../../usecases/users/DeleteUserUseCase";

export class DeleteUserController {
  static async handle(request: any) {
    const deleteUserUsecase = new DeleteUserUsecase(
      usersRepository
    )
    try {
      const { id } = request
      const user = await deleteUserUsecase.execute(id)
      return user
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
    }
  }
}

