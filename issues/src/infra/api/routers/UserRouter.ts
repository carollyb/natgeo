import { 
  CreateUserController,
  ListAllUsersController,
  DeleteUserController,
  UpdateUserController
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

    this.httpServer.on("get", "/user/:offset/:limit", async (params: any, body: any) => {
      const response = await ListAllUsersController.handle(params)
      return response
    })

    this.httpServer.on("delete", "/user/:id", async (params: any, body: any) => {
      const response = await DeleteUserController.handle(params)
      return response
    })

    this.httpServer.on("patch", "/user/:id", async (params: any, body: any) => {
      const response = await UpdateUserController.handle(params, body)
      return response
    })

  }

}