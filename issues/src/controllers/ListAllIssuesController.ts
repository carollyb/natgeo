import {Request, Response} from "express";
import { PrismaUsersRepository } from "../repositories/prisma/PrismaUsersRepository";
import { ListAllIssuesUsecase } from "../usecases/ListAllIssuesUsecase";

export default class ListAllIssuesController {
    static async handle(request: Request, response: Response) {
        const prismaUsersRepository = new PrismaUsersRepository()
        const listAllIssuesUsecase = new ListAllIssuesUsecase(
            prismaUsersRepository
        )

        try {
            const results = await listAllIssuesUsecase.execute();
            return response.status(200).json(
                results
            )
        } catch (error) {
            return response.status(400).json({
                error: `Não pôde encontrar issues`
            })
        }
    }
}