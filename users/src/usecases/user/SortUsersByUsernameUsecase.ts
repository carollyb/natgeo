import { UsersRepository } from "../../repositories/UsersRepository"

export class SortUsersByUsernameUsecase {
    constructor(
        private userRepository: UsersRepository
    ) {}

    async execute(request: string) {
        try {
            const type = request

            const sortedUsers = await this.userRepository.sortUsersByUsername(
                type
            )

            return sortedUsers
        } catch (error) {
            throw new Error(`Could not find users`)
        }
    }
}