export interface IssuesRepository {
    listAllIssues: () => Promise<any[]>
}