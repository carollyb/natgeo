import { Request, Response } from "express";
import AuthenticationService from "../../services/auth/AuthenticationService";
import ListUserService from "../../services/user/ListUserService";

export default class AuthenticationController {
    static async handle(request: Request, response: Response) {
        try {
            const { username, password } = request.body;
            const user = await ListUserService.searchUser(username);
            const token = await AuthenticationService.execute({username, password});

            return response.status(200).json({
                token: token,
                username: username
            })
        } catch (error) {
            response.status(400).json({
                error
            })
        }
    }
}