import { Request, Response } from "express";
import CreateUserService from "../../services/user/CreateUserService";
import DeleteUserService from "../../services/user/deleteUserService";

export default class DeleteUserController {
    static async handle(request: Request, response: Response) {
        try {
            const { id } = request.params
            const deletedUser = await DeleteUserService.execute(id)
            return response.status(202).json(deletedUser)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(
                    error.message
                )
            }
        }
    }
}