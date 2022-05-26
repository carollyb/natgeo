import prisma from "../../database/index";
import { hash } from "bcrypt"
interface IUser {
    id?: string,
    full_name: string,
    username: string,
    password: string
}

export default class CreateUserService {
    static async execute({ full_name, username, password }: IUser) {
        try {
            const passwordHash = await hash(password, 8)            
            const user = await prisma.user.create({
                data: {
                    full_name,
                    username,
                    password: passwordHash
                }
            })            
            return user
        } catch (error) {
            throw new Error(`Could not create user`)
        }
    }
}