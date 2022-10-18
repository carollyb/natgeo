import { issuesRepository } from "../../server";
import { SortIssuesByDateUsecase } from "../../usecases/SortIssuesByDateUsecase";

type Query = {
    type: string
}
export class SortIssuesByDateController {
    static async handle(params: any) {
        const sortIssuesByDateUsecase = new SortIssuesByDateUsecase(
            issuesRepository
            )
            const { type } = params
        try {
            const issuesByDate = await sortIssuesByDateUsecase.execute(type)
            return issuesByDate
        } catch (error) {
            if (error instanceof Error) {
                return error.message
            }
        }

    }
}