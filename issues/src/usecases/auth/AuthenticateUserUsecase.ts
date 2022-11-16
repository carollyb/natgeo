import { compare } from "bcrypt"
import { UsersRepository } from "../../domain/repository/UsersRepository"

type LoginRequest = {
    username: string,
    password: string,
}

export class AuthenticateUserUsecase {
  constructor(
    private userRepository: UsersRepository
  ) {}

  async execute({ username, password }: LoginRequest) {
    const userExists = await this.userRepository.searchUser(username)
    if (userExists == null) throw new Error("User does not exist")

    const passwordMatch = await compare(password, userExists.password)
    if (!passwordMatch) throw new Error("Incorrect email or password")

    const user = await this.userRepository.login({
      username,
      id: userExists.id
    })
    if (!user) throw new Error(`Could not create user`)
    return user      
  }
}