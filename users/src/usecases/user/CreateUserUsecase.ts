import { UsersRepository } from "../../repositories/UsersRepository";

interface CreateUserUsecaseRequest {
    full_name: string,
    username: string,
    password: string,
}

export class CreateUserUsecase {
    constructor(
        private userRepository: UsersRepository
    ) {}

    async execute(request: CreateUserUsecaseRequest) {
        try {
            const { full_name, username, password } = request
    
            const user = await this.userRepository.create({
                full_name,
                username,
                password
            })

            return user
        } catch (error) {
            throw new Error(`Could not create user`)
        }
    }

}