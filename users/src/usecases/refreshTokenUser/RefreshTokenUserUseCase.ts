import prisma from "../../database/index"
import { UsersRepository } from "../../repositories/UsersRepository"
import dayjs from "dayjs"

export default class RefreshTokenUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ){}
  async execute(refresh_token: string) {

    const refreshTokenExists = await prisma.refreshToken.findFirst({
      where: {
        id: refresh_token
      }
    })
    if (!refreshTokenExists) throw new Error("Invalid refresh token")

    const user = await this.usersRepository.searchUserById(refreshTokenExists.user_id)
    const username = user.username
    const id = refreshTokenExists.id
    const token = await this.usersRepository.login({
      username,
      id
    })

    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshTokenExists.expiresIn))

    if(refreshTokenExpired){
      await prisma.refreshToken.deleteMany({
        where: {
          user_id: refreshTokenExists.user_id
        }
      })

      const newRefreshToken = await this.usersRepository.refreshToken(refreshTokenExists.user_id)
      return { token, newRefreshToken }
    }
    
    return { token }
  }
}