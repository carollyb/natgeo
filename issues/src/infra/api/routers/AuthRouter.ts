import { 
  AuthenticateUserController
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

    this.httpServer.on("post", "/login", async (params: any, body: any) => {
      const response = await AuthenticateUserController.handle(body)
      return response
    })

  }

}