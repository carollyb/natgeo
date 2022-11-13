import { UsersRepository } from "../../domain/repository/UsersRepository";

export class DeleteUserUsecase {
  constructor(
    private userRepository: UsersRepository
  ) {}

  async execute(id: string) {
    
    const deletedUser = await this.userRepository.deleteUser(
      id
    )
    if (!deletedUser) throw new Error("Could not delete user")
    return deletedUser
  }
}