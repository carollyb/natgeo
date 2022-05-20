module.exports = {
    async listAllUsers() {
        const allUsers = await prisma.user.findMany()
        console.log(allUsers);
        return allUsers
    },
    async searchUser(username: String) {
        const searchUser = await prisma.user.findMany({
            where: {
                username: username
            }
        })
        return searchUser
    },
    async searchUserById(id: String) {
        const searchUserById = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return searchUserById
    }
}