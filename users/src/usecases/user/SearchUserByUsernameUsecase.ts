import { UsersRepository } from "../../repositories/UsersRepository"

export class SearchUserByUsernameUsecase {
    constructor(
        private usersRepository: UsersRepository
    ) {}
    
    async execute(username: string) {
        const user = await this.usersRepository.searchUser(username)
        return user
    }
}