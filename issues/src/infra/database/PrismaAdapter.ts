import { PrismaClient } from "@prisma/client";
import Connection from "./Connection";

export default class PrismaAdapter implements Connection {
  database: PrismaClient
  
  constructor () {
    this.database = new PrismaClient()
  }

  async create(params: any){
    let issue = await this.database.issue.create(params)
    return issue
  }

  async findMany() {
    let issues = await this.database.issue.findMany()
      return issues
  }

  async findUnique(id: any) {
    let issue = await this.database.issue.findUnique(id)
    return issue
  }

  async filterByDate(params: any) {
    let issues = await this.database.issue.findMany({
      orderBy: [
          {
              date: params == 'asc' ? 'asc' : 'desc'
          }
      ]
  })
      return issues
  }

  async filterByDateRange(startDate: Date, endDate: Date) {
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

  async filterByTopic(params: any) {
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

  async delete(id: any) {
    let issue = await this.database.issue.delete(id)
    return issue
  }

  close() {
    return this.database.$disconnect()
  }

}