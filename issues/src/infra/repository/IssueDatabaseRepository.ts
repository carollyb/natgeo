import { IssuesRepository } from "../../domain/repository/IssuesRepository"
import { TIssue } from "../../domain/entity/Issue"
import Connection from "../database/Connection"

export class IssueDatabaseRepository implements IssuesRepository {
    
  constructor(
    readonly connection: Connection
    ) {}

  async create(params: TIssue) {
    const issue = await this.connection.createIssue(params)
    return issue
  }

  async listAllIssues() {
    const allIssues = await this.connection.findManyIssues()
    return allIssues
  }

  async listOneIssue(id: string) {
    const issue = await this.connection.findUniqueIssue(id)
    return issue
  }

  async sortIssuesByDate(type: string) {
    const issuesByDate = await this.connection.filterIssueByDate(type)
    return issuesByDate
  }

  async searchByTopic(topic: string) {
    const issuesByTopic = await this.connection.filterIssueByTopic(topic)
    return issuesByTopic
  }

  async searchByDateRange(startDate: Date, endDate: Date) {
    const issuesInDateRange = await this.connection.filterIssueByDateRange(startDate, endDate)
    return issuesInDateRange
  }

  async deleteIssue(id: string) {
    const issueToDelete = await this.connection.deleteIssue(id)
    return issueToDelete
  }
}
