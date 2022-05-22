import { Request, Response } from "express";
import UpdateUserService from "../../services/user/UpdateUserService";

export default class UpdateUserController {
    static async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const {
                newFullName,
                newUsername,
                newPassword
            } = request.body
            const newUserData = await UpdateUserService.execute({
                id,
                newFullName,
                newUsername,
                newPassword })
            return response.status(202).json({
                message: "User updated",
                updated: newUserData
            })
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(
                    error.message
                )
            }
        }
    }
}