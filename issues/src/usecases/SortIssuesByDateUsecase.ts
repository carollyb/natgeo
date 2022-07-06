import { IssuesRepository } from "../repositories/IssuesRepository";

export default class SortIssuesByDateUsecase {
    constructor(
        private issuesRepository: IssuesRepository
    ) {}

    async execute(request: string) {
        const type = request
        const issuesByDate = await this.issuesRepository.sortIssuesByDate(type)
        return issuesByDate
    }
}