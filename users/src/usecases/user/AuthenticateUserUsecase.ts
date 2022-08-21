import { UsersRepository } from "../../repositories/UsersRepository"
import { compare } from "bcrypt"

interface AuthenticateUserUsecaseRequest {
    username: string,
    password: string
}

export class AuthenticateUserUsecase {
    constructor(
        private usersRepository: UsersRepository
    ) {}

    async execute(request: AuthenticateUserUsecaseRequest) {
        const { username, password } = request

        const userExists = await this.usersRepository.searchUser(username)

        if (!userExists) throw new Error("User does not exist")

        const passwordMatch = await compare(password, userExists.password);

        if (!passwordMatch) throw new Error("Invalid login credentials")

        const token = await this.usersRepository.login({
            username,
            id: userExists.id
        })

        const refreshToken = await this.usersRepository.refreshToken(userExists.id)
        return {token, refreshToken}
    }
}