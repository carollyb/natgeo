import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import Issue, { TIssue } from "../../domain/entity/Issue";
import { TUser, TUserOutput } from "../../domain/entity/User";
import Connection from "./Connection";
export default class PrismaAdapter implements Connection {
  database: PrismaClient
  
  constructor () {
    this.database = new PrismaClient()
  }
  async createIssue(params: any): Promise<Issue> {
    let issue = await this.database.issue.create({
      data: {
        id: randomUUID(),
        number: params.number,
        date: params.date,
        cover: params.cover,
        file: params.file,
        language: params.language,
        topics: params.topics
      }
    })
    return issue
  }
  async findManyIssues(): Promise<Issue[]> {
    let issues = await this.database.issue.findMany()
    return issues
  }
  async findUniqueIssue(params: any): Promise<Issue | null> {
    let issue = await this.database.issue.findUnique({
      where: {
          id: params.id
      }
  })
    return issue
  }
  async filterIssueByDate(params: any): Promise<Issue[]> {
    let issues = await this.database.issue.findMany({
      orderBy: [
        {
          date: params
        }
      ]
    })
    return issues
  }
  async filterIssueByDateRange(startDate: Date, endDate: Date): Promise<Issue[]> {
    const issues = await this.database.issue.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
    }
    })
    return issues
  }
  async filterIssueByTopic(params: any): Promise<Issue[]> {
    let issues = await this.database.issue.findMany({
      where: {
        topics: {
          contains: params,
          mode: 'insensitive'
        }
      }
    })
    return issues
  }
  async deleteIssue(params: any): Promise<TIssue> {
    let issue = await this.database.issue.delete({
      where: {
          id: params.id
      }
  })
    return issue
  }
  async createUser(params: any): Promise<TUser> {
    let user = await this.database.user.create({
      data: {
        id: randomUUID(),
        full_name: params.full_name,
        username: params.username,
        password: params.password,
      }
      })
    return user
  }
  async searchManyUsers(params: any): Promise<TUser[]> {
    let users = await this.database.user.findMany()
    return users
  }
  updateUser(data: any): Promise<TUserOutput> {
    throw new Error("Method not implemented.");
  }
  findManyUsers(): Promise<TUser[]> {
    throw new Error("Method not implemented.");
  }
  findUniqueUser(params: any): Promise<TUser | null> {
    throw new Error("Method not implemented.");
  }
  deleteUser(params: any): Promise<TUser> {
    throw new Error("Method not implemented.");
  }
  createRefreshToken(params: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  close() {
    return this.database.$disconnect()
  }

}