import prisma from "../../database/index";
import { UsersRepositoryData, UsersRepository, User, UserUpdateData, LoginUserData} from "../UsersRepository";
import { hash, compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import auth from "../../config/auth"
import dayjs from "dayjs"
export class PrismaUsersRepository implements UsersRepository {
    async create({ full_name, username, password }: UsersRepositoryData) {
        const passwordHash = await hash(password, 8)
        const User = await prisma.user.create({
            data: {
                full_name,
                username,
                password: passwordHash
            }
        })

        return User
    }

    async listAllUsers() {
        const allUsers = await prisma.user.findMany()
        return allUsers
    }

    async searchUser(username: string) {
        const searchUser = await prisma.user.findFirst({
            where: {
                username: username
            }
        })
        return searchUser
    }

    async searchUserById(id: string): Promise<any> {
        const searchUser = await prisma.user.findFirst({
            where: {
                id: id
            }
        })
        return searchUser
    }

    async sortUsersByUsername(type: string) {
        const allUsers = await prisma.user.findMany({
            orderBy: [
                {
                    username: type == 'asc' ? 'asc': 'desc'
                }
            ]
        })
        return allUsers
    }

    async delete(id: string) {
        await prisma.user.delete({
            where: {
                id: id
            }
        })
    }

    async update({id, newFullName, newUsername, newPassword}: UserUpdateData) {
        const newUserData = await prisma.user.update({
            where: {
                id
            },
            data: {
                full_name: newFullName,
                username: newUsername,
                password: newPassword
            }
        });
        return newUserData
    }

    async login({ username, id }: any) {
        const token = sign({
            username: username
        }, auth.secret, {
            subject: id,
            expiresIn: "20s"
        })
        return token
    }

    async refreshToken (user_id: string): Promise<any> {
        const expiresIn = dayjs().add(15, "second").unix()
        const generateRefreshToken = await prisma.refreshToken.create({
            data: {
                user_id,
                expiresIn
            }
        })
        return generateRefreshToken
    }
}