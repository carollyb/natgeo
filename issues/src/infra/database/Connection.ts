import Issue, { TIssue } from "../../domain/entity/Issue"
import { TUser, TUserOutput } from "../../domain/entity/User"

export default interface Connection {
  createIssue (params: any): Promise<Issue>
  findManyIssues (): Promise<Issue[]>
  findUniqueIssue (params: any): Promise<Issue | null>
  filterIssueByDate (params: any): Promise<Issue[]>
  filterIssueByDateRange(startDate: Date, endDate: Date): Promise<Issue[]>
  filterIssueByTopic (params: any): Promise<Issue[]>
  deleteIssue (params: any): Promise<TIssue>
  close (): Promise<void>
  createUser (params: any): Promise<TUser>
  searchManyUsers (params: any): Promise<TUser[]>
  updateUser (data: any): Promise<TUserOutput>
  findManyUsers (): Promise<TUser[]>
  findUniqueUser (params: any): Promise<TUser | null>
  deleteUser (params: any): Promise<TUser>
  createRefreshToken (params: any): Promise<any>
}