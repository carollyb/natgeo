import { Request, Response } from "express";
import { issuesRepository } from "../../server";
import { DeleteIssueUsecase } from "../../usecases/DeleteIssueUsecase";

export default class DeleteIssueController {

  static async handle(request: Request, response: Response){
    
    const { id } = request.params

    try {
      const deleteIssueUsecase = new DeleteIssueUsecase(
        issuesRepository
      )

      const deletedIssue = await deleteIssueUsecase.execute(id)
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