import { UsersRepository } from "../../repositories/UsersRepository"

interface AuthenticateUserUsecaseRequest {
    username: string,
    password: string
}

export class AuthenticateUserUsecase {
    constructor(
        private usersRepository: UsersRepository
    ) {}

    async execute(request: AuthenticateUserUsecaseRequest) {
        try {
            const { username, password } = request

            const auth = await this.usersRepository.login({
                username,
                password
            })

            return auth
        } catch (error) {
            throw new Error(`Unexpected Error`)
        }
    }
}