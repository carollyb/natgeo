import { Request, Response } from "express";
import { PrismaIssuesRepository } from "../infra/repositories/PrismaIssuesRepository";
import ListOneIssueUsecase from "../usecases/ListOneIssueUsecase";

export default class ListOneIssueController {

  static async handle(request: Request, response: Response){
    
    const { id } = request.params

    try {
      const prismaIssuesRepository = new PrismaIssuesRepository()
      const listOneIssueUseCase = new ListOneIssueUsecase(
      prismaIssuesRepository
      )

      const issueFound = await listOneIssueUseCase.execute(id)
      return response.status(202).json({
        found: issueFound
      })
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).json({
          erro: error.message
        })
      }
    }
  }
}