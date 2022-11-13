import { UsersRepository} from "../../domain/repository/UsersRepository";
import { sign } from "jsonwebtoken"
import dayjs from "dayjs"
import Connection from "../database/Connection"
import { TUser, TUserInput } from "../../domain/entity/User";

export class UserDatabaseRepository implements UsersRepository {

  constructor(
    readonly connection: Connection
    ) {}

    async createUser(params: TUserInput) {
      const User = await this.connection.createUser(params)
      return User
    }

    async listAllUsers(offset: number, limit: number) {
        const allUsers = await this.connection.findManyUsers(offset, limit)
        return allUsers
    }

    async searchUser(username: string) {
        const searchUser = await this.connection.findUniqueUser(username)
        return searchUser
    }

    async searchUserById(id: string): Promise<any> {
        const searchUser = await this.connection.findUniqueUser(id)
        return searchUser
    }

    async sortUsersByUsername(type: string) {
        const allUsers = await this.connection.searchManyUsers({
            
        })
        return allUsers
    }

    async deleteUser(id: string) {
      const deletedUser = await this.connection.deleteUser(id)
      return deletedUser
    }

    async updateUser(id: string, data: Partial<TUser>) {
      const newUserData = await this.connection.updateUser(id, data);
      return newUserData
    }

    async login({ username, id }: any) {
      const token = sign({
          username: username
      }, `${process.env.JWT_SECRET}`, {
          subject: id,
          expiresIn: "20s"
      })
      return token
    }

    async refreshToken (user_id: string): Promise<any> {
      const expiresIn = dayjs().add(15, "second").unix()
      const generateRefreshToken = await this.connection.createRefreshToken(user_id, expiresIn)
      return generateRefreshToken
    }
}