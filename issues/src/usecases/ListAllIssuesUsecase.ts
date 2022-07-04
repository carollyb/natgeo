import { IssuesRepository } from "../repositories/IssuesRepository"

export class ListAllIssuesUsecase {
    constructor(
        private issuesRepository: IssuesRepository
    ) {}

    async execute(){
        const allIssues = await this.issuesRepository.listAllIssues()

        return allIssues
    }
}