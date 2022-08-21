import { UsersRepository } from "../repositories/UsersRepository";

export default class GenerateRefreshToken {
  constructor(
    private usersRepository: UsersRepository
  ){}
  async execute(user_id: string) {
    const generateRefreshToken = await this.usersRepository.refreshToken(user_id)
    return generateRefreshToken
  }
}