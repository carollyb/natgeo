import prisma from "../../database/index"

interface IUserData {
    id?: string,
    newFullName: string,
    newUsername: string,
    newPassword: string
}

export default class UpdateUserService {
    static async execute({id, newFullName, newUsername, newPassword}: IUserData){
        try {
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
        } catch (error) {
            throw new Error(`Could not update user`)
        }
    }
}