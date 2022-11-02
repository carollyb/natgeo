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
  async searchManyUsers(type: any): Promise<TUser[]> {
    let users = await this.database.user.findMany({
      orderBy: [
        {
            username: type == 'asc' ? 'asc': 'desc'
        }
    ]
    })
    return users
  }
  async updateUser(data: any, id: any): Promise<TUserOutput> {
    let updateUser = await this.database.user.update({
      where: {
          id
      },
      data
    })
    return updateUser
  }
  async findManyUsers(): Promise<TUser[]> {
    let users = await this.database.user.findMany()
    return users
  }
  async findUniqueUser(id: any): Promise<TUser | null> {
    let user = await this.database.user.findUnique({
      where: {
        id
      }
    })
    return user
  }
  async deleteUser(id: any): Promise<TUser> {
    let user = await this.database.user.delete({
      where: {
        id
      }
    })
    return user
  }
  async createRefreshToken(user_id: any, expiresIn: any): Promise<any> {
    const generateRefreshToken = await this.database.refresh_token.create({
      data: {
          user_id,
          expiresIn
      }
  })
  }

  close() {
    return this.database.$disconnect()
  }

}