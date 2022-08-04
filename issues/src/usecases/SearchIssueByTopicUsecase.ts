import { IssuesRepository } from "../domain/repository/IssuesRepository";

export class SearchIssueByTopicUsecase {
    constructor(
        private issuesRepository: IssuesRepository
    ) {}

    async execute(topic: string) {
        
        const issuesByTopic = await this.issuesRepository.searchByTopic(topic)
        
        if (issuesByTopic.length === 0) {
            throw new Error(`Could not find any issue with that topic`)
        }

        return issuesByTopic
        
    }
}