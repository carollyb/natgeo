import { issuesRepository, httpServer } from "../../server";
import { CreateIssueUsecase } from "../../usecases/CreateIssueUsecase"
export default class CreateIssueController {
  static async handle(request: any) {

    const {
      number,
      date,
      cover,
      file,
      language,
      topics
    } = request

    try {
      const createIssueUsecase = new CreateIssueUsecase(
        issuesRepository
      )
      const issue = await createIssueUsecase.execute({
        number,
        date,
        cover,
        file,
        language,
        topics
      })

      return issue
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
    }
  }
}

