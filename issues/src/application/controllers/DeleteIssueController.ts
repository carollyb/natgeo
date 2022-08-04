import { issuesRepository } from "../../server";
import { DeleteIssueUsecase } from "../../usecases/DeleteIssueUsecase";

export class DeleteIssueController {

  static async handle(request: any){
    
    const { id } = request

    try {
      const deleteIssueUsecase = new DeleteIssueUsecase(
        issuesRepository
      )

      const deletedIssue = await deleteIssueUsecase.execute(id)
      return deletedIssue
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
    }
  }
}