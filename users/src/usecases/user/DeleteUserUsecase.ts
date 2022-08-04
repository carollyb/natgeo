import { UsersRepository } from "../../repositories/UsersRepository";

interface DeleteUserUsecaseRequest {
    id: string
}

export class DeleteUserUsecase {
    constructor(
        private userRepository: UsersRepository
    ) {}

    async execute(request: DeleteUserUsecaseRequest) {
        try {
            const { id } = request
            await this.userRepository.delete(
                id
            )
        } catch (error) {
            throw new Error(`Could not delete user`)
        }
    }
}