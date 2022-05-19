const prisma = require("../../database/index");
const { hash } = require("bcrypt")

interface IUser {
    id?: string,
    full_name: string,
    username: string,
    password: string
}

module.exports = {
    async execute({ full_name, username, password }: IUser) {
        
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