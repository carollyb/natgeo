import { 
  CreateUserController,
  ListAllUsersController,
  DeleteUserController
  } from "../../../application/controllers";
import { UsersRepository } from "../../../domain/repository/UsersRepository";
import HttpServer from "../HttpServer";
export default class Router {
  constructor(
    readonly httpServer: HttpServer, 
    readonly usersRepository: UsersRepository
    ) {
  }
  
  async init() {

    this.httpServer.on("post", "/user", async (params: any, body: any) => {
      const response = await CreateUserController.handle(body)
      return response
    })

    this.httpServer.on("get", "/user", async (params: any, body: any) => {
      const response = await ListAllUsersController.handle()
      return response
    })

    this.httpServer.on("delete", "/user/:id", async (params: any, body: any) => {
      const response = await DeleteUserController.handle(params)
      return response
    })

  }

}