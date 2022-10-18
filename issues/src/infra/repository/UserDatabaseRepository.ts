import { UsersRepository} from "../../domain/repository/UsersRepository";
import { hash } from "bcrypt"
import { sign } from "jsonwebtoken"
import dayjs from "dayjs"
import Connection from "../database/Connection"
import { TUser, TUserInput } from "../../domain/entity/User";

export class UserDatabaseRepository implements UsersRepository {

  constructor(
    readonly connection: Connection
    ) {}

    async createUser({ full_name, username, password }: TUserInput) {
        const passwordHash = await hash(password, 8)
        const User = await this.connection.createUser({
            data: {
                full_name,
                username,
                password: passwordHash
            }
        })

        return User
    }

    async listAllUsers() {
        const allUsers = await this.connection.findManyUsers()
        return allUsers
    }

    async searchUser(username: string) {
        const searchUser = await this.connection.findUniqueUser({
            where: {
                username
            }
        })
        return searchUser
    }

    async searchUserById(id: string): Promise<any> {
        const searchUser = await this.connection.findUniqueUser({
            where: {
                id
            }
        })
        return searchUser
    }

    async sortUsersByUsername(type: string) {
        const allUsers = await this.connection.searchManyUsers({
            orderBy: [
                {
                    username: type == 'asc' ? 'asc': 'desc'
                }
            ]
        })
        return allUsers
    }

    async deleteUser(id: string) {
        await this.connection.deleteUser({
            where: {
                id: id
            }
        })
    }

    async updateUser(id: string, data: Partial<TUser>) {
        const newUserData = await this.connection.updateUser({
            where: {
                id
            },
            data
        });
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
        const generateRefreshToken = await this.connection.createRefreshToken({
            data: {
                user_id,
                expiresIn
            }
        })
        return generateRefreshToken
    }
}