import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import ListUserService from "../user/ListUserService"
import auth from "../../config/auth"

interface IAuthRequest {
    username: string;
    password: string
}

export default class AuthenticationService {
    static async execute({ username, password }: IAuthRequest) {
        try {
            const userExists = await ListUserService.searchUser(username)

            if(userExists.length === 0) {
                throw new Error("User does not exist")
            }

            const passwordMatch = await compare(password, userExists[0].password);

            if (!passwordMatch) {
                throw new Error("Invalid login credentials")
            }

            const token = sign({
                username: userExists[0].username
            }, auth.secret, {
                subject: userExists[0].username,
                expiresIn: "1d"
            })

            return token
        } catch (error) {
            throw new Error("Unexpected error")
        }
    }
}