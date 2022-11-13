import { TUser } from "../../domain/entity/User";
import { UsersRepository } from "../../domain/repository/UsersRepository";

export class UpdateUserUsecase {
  constructor(
    private userRepository: UsersRepository
  ) {}

  async execute(id: string, data: Partial<TUser>) {
    
    const userExists = await this.userRepository.searchUserById(id)
    if (!userExists) throw new Error("User does not exist")
    const updateUser = await this.userRepository.updateUser(
      id,
      data
    )
    if (!updateUser) throw new Error("Could not update user")
    return updateUser
  }
}