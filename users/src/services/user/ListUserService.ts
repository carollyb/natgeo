import prisma from "../../database/index"

export default class ListUserService {
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
    async searchUserById(id: string) {
        const searchUserById = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return searchUserById
    }
}