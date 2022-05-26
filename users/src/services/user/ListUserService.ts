import prisma from "../../database/index"

export default class ListUserService {
    static async listAllUsers() {
        const allUsers = await prisma.user.findMany()
        return allUsers
    }
    static async searchUser(username: string) {
        const searchUser = await prisma.user.findMany({
            where: {
                username: username
            }
        })
        return searchUser
    }
    static async searchUserById(id: string) {
        const searchUserById = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return searchUserById
    }
    static async sortAllUsers(type: string) {
        
        const allUsers = await prisma.user.findMany({
            orderBy: [
                {
                    username: type == 'asc' ? 'asc': 'desc'
                }
            ]
        })
        return allUsers
    }
}