import { IssuesRepository } from "../repositories/IssuesRepository";

export class SearchIssueByTopicUsecase {
    constructor(
        private issuesRepository: IssuesRepository
    ) {}

    async execute(topic: string) {
        try {
            const issuesByTopic = await this.issuesRepository.searchByTopic(topic)
            return issuesByTopic
        } catch (error) {
            throw new Error(`Could not find any issue with that topic`)
        }
    }
}