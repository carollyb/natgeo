import Issue, { TIssue } from "../entity/Issue";

export interface IssuesRepository {
    create: (data: TIssue) => Promise<Issue>
    listAllIssues: () => Promise<any[]>
    listOneIssue: (id: string) => Promise<TIssue | any>
    sortIssuesByDate: (type: string) => Promise<any[]>
    searchByTopic: (topic: string) => Promise<any[]>
    searchByDateRange: (startDate: any, endDate: any) => Promise<any[]>
    deleteIssue: (id: string) => Promise<TIssue>
}