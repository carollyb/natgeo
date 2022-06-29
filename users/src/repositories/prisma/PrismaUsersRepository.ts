import prisma from "../../database/index";
import { UsersRepositoryData, UsersRepository} from "../UsersRepository";
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

    async delete(id: string) {
        await prisma.user.delete({
            where: {
                id: id
            }
        })
    };
}