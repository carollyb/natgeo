import { 
  CreateIssueController, 
  DeleteIssueController,
  ListAllIssuesController,
  ListOneIssueController,
  SearchIssueByDateRangeController,
  SearchIssueByTopicController,
  SortIssuesByDateController
  } from "../../application/controllers";
import { IssuesRepository } from "../../domain/repository/IssuesRepository";
import HttpServer from "./HttpServer";
export default class Router {
  constructor(readonly httpServer: HttpServer, readonly issuesRepository: IssuesRepository) {
  }
  
  async init() {
    
    this.httpServer.on("get", "/", async (params: any, body: any) => {
      const message = { message: "NatGeo" }
      return message
    })

    this.httpServer.on("get", "/issues", ListAllIssuesController.handle)

    this.httpServer.on("get", "/issue/:id", async (params: any, body: any) => {
      const response = await ListOneIssueController.handle(params)
      return response
    })

    this.httpServer.on("get", "/issues/sort/:type", async (params: any, body: any) => {
      const response = await SortIssuesByDateController.handle(params)
      return response
    })

    this.httpServer.on("get", "/issues/search", SearchIssueByTopicController.handle)

    this.httpServer.on("get", "/issues/date", SearchIssueByDateRangeController.handle)

    this.httpServer.on("post", "/issues", async (params: any, body: any) => {
      const response = await CreateIssueController.handle(body)
      return response
    })

    this.httpServer.on("delete", "/issue/:id", async (params: any, body: any) => {
      const response = await DeleteIssueController.handle(params)
      return response
    })

  }

}