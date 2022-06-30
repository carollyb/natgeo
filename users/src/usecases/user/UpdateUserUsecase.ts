import { UsersRepository } from "../../repositories/UsersRepository";

interface UpdateUserUsecaseRequest {
    id?: string,
    newFullName: string,
    newUsername: string,
    newPassword: string
}

export class UpdateUserUsecase {
    constructor(
        private userRepository: UsersRepository
    ) {}

    async execute(request: UpdateUserUsecaseRequest) {
        try {
            const { id, newFullName, newUsername, newPassword } = request

            const userUpdated = await this.userRepository.update({
                id,
                newFullName,
                newUsername,
                newPassword })

            return userUpdated
        } catch (error) {
            throw new Error(`Could not update user`)
        }
    }
}