const CreateUserService = require("../../services/user/CreateUserService");
import { Request, Response } from "express"

module.exports = {
    async handle(request: Request, response: Response) {
        try {
            const { full_name, username, password } = request.body
            const user = await CreateUserService.execute(full_name, username, password)
            response.status(201).json({
                "user_created": user
            })
        } catch (error: any) {
            response.status(400).json({
                error: error.message
            })
        }
    }
}