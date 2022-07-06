export interface IssuesRepositoryData {
    number: number,
    date: Date,
    cover: string,
    file: string,
    language: string,
    topics: string
}
export interface Issue {
    id?: string,
    number: number,
    date: Date,
    cover: string,
    file: string,
    language: string,
    topics: string
}

export interface IssuesRepository {
    create: (data: IssuesRepositoryData) => Promise<Issue>
    listAllIssues: () => Promise<any[]>
    sortIssuesByDate: (type: string) => Promise<any[]>
}