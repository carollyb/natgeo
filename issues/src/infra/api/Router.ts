import { IssuesRepository } from "../../domain/repository/IssuesRepository";
import { ListAllIssuesUsecase } from "../../usecases/ListAllIssuesUsecase";
import HttpServer from "./HttpServer";

export default class Router {
  constructor(readonly httpServer: HttpServer, readonly issuesRepository: IssuesRepository) {
  }
  
  async init() {
    
    this.httpServer.on("get", "/", async (params: any, body: any) => {
      return body
    })

    this.httpServer.on("get", "/issues", async (params: any, body: any) => {
      const listAllIssues = new ListAllIssuesUsecase(this.issuesRepository)
      const allIssues = await listAllIssues.execute()
      return this.issuesRepository.listAllIssues()
    })
  }

}