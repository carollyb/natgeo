import prisma from "../../database/index";
import { UsersRepositoryData, UsersRepository, User, UserUpdateData} from "../UsersRepository";
import { hash } from "bcrypt"

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
}