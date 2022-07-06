import { IssuesRepository } from "../repositories/IssuesRepository";

export class SortIssuesByDateUsecase {
    constructor(
        private issuesRepository: IssuesRepository
    ) {}

    async execute(request: string) {
        try {
            const type = request
            const issuesByDate = await this.issuesRepository.sortIssuesByDate(type)
            return issuesByDate
        } catch (error) {
            throw new Error(`Could not sort issues`)
        }
    }
}