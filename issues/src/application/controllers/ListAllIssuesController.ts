import { Request, Response } from "express";
import { issuesRepository } from "../../server";
import { ListAllIssuesUsecase } from "../../usecases/issues/ListAllIssuesUsecase";

export class ListAllIssuesController {
  static async handle(request: Request, response: Response) {
    const listAllIssuesUsecase = new ListAllIssuesUsecase(
      issuesRepository
    )
    const results = await listAllIssuesUsecase.execute()
    try {
      return results
    } catch (error) {
      return response.status(400).json({
        error: `Não pôde encontrar issues`
      })
    }
  }
}