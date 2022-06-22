import prisma from "../../database/index";
import { UsersRepositoryData, UsersRepository} from "../UsersRepository";
import { hash } from "bcrypt"

export class PrismaUsersRepository implements UsersRepository {
    async create({ full_name, username, password }: UsersRepositoryData) {
        const passwordHash = await hash(password, 8)
        await prisma.user.create({
            data: {
                full_name,
                username,
                password: passwordHash
            }
        })
    }
}