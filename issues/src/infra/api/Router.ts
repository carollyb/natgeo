import CreateIssueController from "../../application/controllers/CreateIssueController";
import DeleteIssueController from "../../application/controllers/DeleteIssueController";
import ListAllIssuesController from "../../application/controllers/ListAllIssuesController";
import ListOneIssueController from "../../application/controllers/ListOneIssueController";
import SearchIssueByDateRangeController from "../../application/controllers/SearchIssueByDateRangeController";
import SearchIssueByTopicController from "../../application/controllers/SearchIssueByTopicController";
import SortIssuesByDateController from "../../application/controllers/SortIssuesByDateController";
import { IssuesRepository } from "../../domain/repository/IssuesRepository";
import HttpServer from "./HttpServer";
export default class Router {
  constructor(readonly httpServer: HttpServer, readonly issuesRepository: IssuesRepository) {
  }
  
  async init() {
    
    this.httpServer.on("get", "/", async (params: any, body: any) => {
      return body
    })

    this.httpServer.on("get", "/issues", ListAllIssuesController.handle)

    this.httpServer.on("get", "/issue/:id", async (params: any, body: any) => {
      const response = await ListOneIssueController.handle(params)
      return response
    })

    this.httpServer.on("get", "/issues/sort", SortIssuesByDateController.handle)

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