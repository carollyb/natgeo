import { Request, Response } from "express";
import { PrismaIssuesRepository } from "../infra/repositories/PrismaIssuesRepository";
import { DeleteIssueUsecase } from "../usecases/DeleteIssueUsecase";

export default class DeleteIssueController {

  static async handle(request: Request, response: Response){
    
    const { id } = request.params

    try {
      const prismaIssuesRepository = new PrismaIssuesRepository()
      const deleteIssueUseCase = new DeleteIssueUsecase(
      prismaIssuesRepository
      )

      const deletedIssue = await deleteIssueUseCase.execute(id)
      return response.status(202).json({
        deleted: deletedIssue
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