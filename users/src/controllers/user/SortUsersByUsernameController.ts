import { Request, Response } from "express";
import ListUserService from "../../services/user/ListUserService";

export default class SortUsersByUsernameController {
    static async handle(request: Request, response: Response) {
        try {
            const { type } = request.query
            const sortedUsers = await ListUserService.sortAllUsers(`${type}`)
            return response.status(200).json(sortedUsers)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}