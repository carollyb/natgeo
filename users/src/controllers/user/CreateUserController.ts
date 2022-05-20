import CreateUserService from "../../services/user/CreateUserService"
import { Request, Response } from "express"
const createUserService = new CreateUserService()

export default class CreateUserController {
    async handle(request: Request, response: Response) {
        try {
            const { full_name, username, password } = request.body
            const User = {
                full_name,
                username,
                password
            }
            const user = await createUserService.execute(User)
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