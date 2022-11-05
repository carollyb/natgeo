import {
  GetSecureUrlController
} from "../../../application/controllers"

import HttpServer from "../HttpServer";
export default class Router {
  constructor(
    readonly httpServer: HttpServer,
    ) {
  }
  
  async init() {
    this.httpServer.on("get", "/s3Url", async (params: any, body: any) => {
      const response = await GetSecureUrlController.handle()
      return response
    })
  }
}