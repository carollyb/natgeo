import { IssuesRepository } from "../repositories/IssuesRepository";

interface CreateIssueUsecaseRequest {
    number: any,
    date: any,
    cover: string,
    file: string,
    language: string,
    topics: string
}

export class CreateIssueUsecase {
    constructor(
        private issuesRepository: IssuesRepository
    ) {}
    
    async execute(request: CreateIssueUsecaseRequest) {
        try {
            let { number, date, cover, file, language, topics } = request

            number = Number(number)
            date = new Date(date)
        
            const issue = await this.issuesRepository.create({
                number,
                date,
                cover, 
                file,
                language, 
                topics
            })

            return issue
        } catch (error) {
            throw new Error(`Could not create issue`)
        }
    }
}