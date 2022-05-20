import { Request, Response } from "express"

const listUserService = require("../../services/user/ListUserService")

module.exports = {
    async handle(request: Request, response: Response) {
        try {
            const allUsers = await listUserService.listAllUsers()
            return response.status(200).json({
                results: allUsers
            })
        } catch (error) {
            return response.status(400).json({
                error: `Não pôde encontrar users`
            })
        }
    }
}