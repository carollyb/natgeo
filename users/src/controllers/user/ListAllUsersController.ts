import { Request, Response } from "express"

import ListUserService from "../../services/user/ListUserService"
export default class ListAllUsersController {
    static async handle(request: Request, response: Response) {
        try {
            const results = await ListUserService.listAllUsers()
            return response.status(200).json(
                results
            )
        } catch (error) {
            return response.status(400).json({
                error: `Não pôde encontrar users`
            })
        }
    }
}