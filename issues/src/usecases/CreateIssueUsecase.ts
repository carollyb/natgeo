import { isDate } from "util/types";
import { IssuesRepository } from "../repositories/IssuesRepository";

type CreateIssueUsecaseRequest = {
    number: any;
    date: any;
    cover: string;
    file: string;
    language: string;
    topics: string;
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
        
            let format = isDate(date);
            if(!format) {
                throw new Error(`Invalid date format`)
            }
            
            if(!number || !file) {
                throw new Error(`Cannot have empty fields`)
            }

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
            if (error instanceof Error) {
                throw new Error(`Could not create issue: ${error.message}`)
            }
        }
    }
}