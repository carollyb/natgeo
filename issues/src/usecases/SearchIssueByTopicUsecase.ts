import { IssuesRepository } from "../repositories/IssuesRepository";

export class SearchIssueByTopicUsecase {
    constructor(
        private issuesRepository: IssuesRepository
    ) {}

    async execute(topic: string) {
        try {
            const issuesByTopic = await this.issuesRepository.searchByTopic(topic)
            if (issuesByTopic.length == 0) {
                throw new Error(`Could not find any issue with that topic`)
            }
            return issuesByTopic
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
    }
}