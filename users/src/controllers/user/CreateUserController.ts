import CreateUserService from "../../services/user/CreateUserService"
import { Request, Response } from "express"
export default class CreateUserController {
    static async handle(request: Request, response: Response) {
        try {
            const { full_name, username, password } = request.body
            const User = {
                full_name,
                username,
                password
            }
            const user = await CreateUserService.execute(User)
            response.status(201).json({
                "user_created": user
            })
        } catch (error) {
            response.status(400).json({
                error: "erro"
            })
        }
    }
}