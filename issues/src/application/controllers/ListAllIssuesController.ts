import {Request, Response} from "express";
import { issuesRepository } from "../../server";
import { ListAllIssuesUsecase } from "../../usecases/ListAllIssuesUsecase";

export class ListAllIssuesController {
    static async handle(request: Request, response: Response) {
        const listAllIssuesUsecase = new ListAllIssuesUsecase(
            issuesRepository
        )

        try {
            const results = await listAllIssuesUsecase.execute();
            return results
            
        } catch (error) {
            return response.status(400).json({
                error: `Não pôde encontrar issues`
            })
        }
    }
}