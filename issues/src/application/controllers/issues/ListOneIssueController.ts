import { issuesRepository } from "../../../server";
import ListOneIssueUsecase from "../../../usecases/issues/ListOneIssueUsecase";

export class ListOneIssueController {

  static async handle(params: any){
    
    const { id } = params

    try {
      const listOneIssueUseCase = new ListOneIssueUsecase(
        issuesRepository
      )

      const issueFound = await listOneIssueUseCase.execute(id)
      return issueFound
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
    }
  }
}