import { UsersRepository } from "../../domain/repository/UsersRepository";

export class ListAllUsersUsecase {
  constructor(
    private userRepository: UsersRepository
  ) {}

  async execute(offset: number, limit: number) {
    
    const allUsers = await this.userRepository.listAllUsers(
      offset,
      limit
    )
    if (!allUsers) throw new Error("Could not find users")
    return allUsers
  }
}