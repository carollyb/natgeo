import { IssuesRepository } from "../domain/repository/IssuesRepository";

type SearchIssueByDateRangeRequest = {
    startDate: any;
    endDate: any;
}

export class SearchIssueByDateRangeUsecase {
    constructor(
        private issuesRepository: IssuesRepository
    ) {}

    async execute(request: SearchIssueByDateRangeRequest) {
        try {
            let { startDate, endDate } = request
            startDate = new Date(startDate);
            endDate = new Date(endDate)
            
            const issuesInDateRange = await this.issuesRepository.searchByDateRange(
                startDate,
                endDate
                )
            return issuesInDateRange
        } catch (error) {
            throw new Error(`Could not find issues in that date range`)
        }
    }
}