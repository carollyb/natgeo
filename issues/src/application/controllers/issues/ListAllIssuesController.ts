import { issuesRepository } from "../../../server";
import { ListAllIssuesUsecase } from "../../../usecases/issues/ListAllIssuesUsecase";

export class ListAllIssuesController {
  static async handle() {
    const listAllIssuesUsecase = new ListAllIssuesUsecase(
      issuesRepository
    )
    const results = await listAllIssuesUsecase.execute()
    try {
      return results
    } catch (error) {
      if(error instanceof Error) return error.message
    }
  }
}