import { UsersRepository } from "../../repositories/UsersRepository";

export class ListAllUsersUsecase {
    constructor(
        private usersRepository: UsersRepository
    ) {}

    async execute() {
        const allUsers = await this.usersRepository.listAllUsers()

        return allUsers
    }
}