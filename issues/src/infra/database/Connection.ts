import Issue, { TIssue } from "../../domain/entity/Issue"

export default interface Connection {
  create (params: any): Promise<Issue>
  findMany (): Promise<Issue[]>
  findUnique (id: any): Promise<Issue | null>
  filterByDate (params: any): Promise<Issue[]>
  filterByDateRange(startDate: Date, endDate: Date): Promise<Issue[]>
  filterByTopic (params: any): Promise<Issue[]>
  delete (id: any): Promise<TIssue>
  close (): Promise<void>
}