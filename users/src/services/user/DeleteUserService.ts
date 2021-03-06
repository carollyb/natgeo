import prisma from "../../database";

export default class DeleteUserService {
    static async execute(id: string) {
        try {
            const deleteUser = await prisma.user.delete({
                where: {
                    id: id
                }
            })
            return deleteUser
        } catch (error) {
            throw new Error("Could not delete user")
        }
    }
}