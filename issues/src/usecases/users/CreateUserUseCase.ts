import { hash } from "bcrypt"
import { UsersRepository } from "../../domain/repository/UsersRepository"

type CreateUserUsecaseRequest = {
    full_name: string,
    username: string,
    password: string,
}

export class CreateUserUsecase {
  constructor(
    private userRepository: UsersRepository
  ) {}

  async execute(request: CreateUserUsecaseRequest) {   
    const { full_name, username, password } = request
    const passwordHash = await hash(password, 8)
    const user = await this.userRepository.createUser({
      full_name,
      username,
      password: passwordHash
    })
    if (!user) throw new Error(`Could not create user`)
    return user      
  }
}