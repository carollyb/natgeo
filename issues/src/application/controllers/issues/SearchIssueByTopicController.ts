import { issuesRepository } from "../../../server";
import { SearchIssueByTopicUsecase } from "../../../usecases/issues/SearchIssueByTopicUsecase";

type Query = {
    topic: string
}
export class SearchIssueByTopicController {
    static async handle(params: any) {
        const searchIssueByTopicUsecase = new SearchIssueByTopicUsecase(
            issuesRepository
        )
        try {
            const { topic } = params
            const issuesByTopic = await searchIssueByTopicUsecase.execute(topic)
            return issuesByTopic
        } catch (error) {
            if (error instanceof Error) {
                return error.message
            }
        }
    }
}