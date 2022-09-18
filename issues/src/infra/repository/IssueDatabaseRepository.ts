import { IssuesRepository } from "../../domain/repository/IssuesRepository"
import { TIssue } from "../../domain/entity/Issue"
import Connection from "../database/Connection"

export class IssueDatabaseRepository implements IssuesRepository {
    
  constructor(
    readonly connection: Connection
    ) {}

  async create(params: TIssue) {
    const issue = await this.connection.create(params)
    return issue
  }

  async listAllIssues() {
    const allIssues = await this.connection.findMany()
    return allIssues
  }

  async listOneIssue(id: string) {
    const issue = await this.connection.findUnique(id)
    return issue
  }

  async sortIssuesByDate(type: string) {
    const issuesByDate = await this.connection.filterByDate(type)
    return issuesByDate
  }

  async searchByTopic(topic: string) {
    const issuesByTopic = await this.connection.filterByTopic(topic)
    return issuesByTopic
  }

  async searchByDateRange(startDate: Date, endDate: Date) {
    const issuesInDateRange = await this.connection.filterByDateRange(startDate, endDate)
    return issuesInDateRange
  }

  async deleteIssue(id: string) {
    const issueToDelete = await this.connection.delete(id)
    return issueToDelete
  }
}
