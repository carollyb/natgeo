import prisma from "../../database/index";
import { UsersRepositoryData, UsersRepository, User, UserUpdateData, LoginUserData} from "../UsersRepository";
import { hash, compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import auth from "../../config/auth"
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
        const searchUser = await prisma.user.findMany({
            where: {
                username: username
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

    async login({ username, password }: LoginUserData) {
        try {
            const userExists = await this.searchUser(username)

            if(userExists.length === 0) {
                throw new Error("User does not exist")
            }

            const passwordMatch = await compare(password, userExists[0].password);

            if (!passwordMatch) {
                throw new Error("Invalid login credentials")
            }

            const token = sign({
                username: userExists[0].username
            }, auth.secret, {
                subject: userExists[0].username,
                expiresIn: "1d"
            })

            return token
        } catch (error) {
            throw new Error("Unexpected error")
        }
    }
}