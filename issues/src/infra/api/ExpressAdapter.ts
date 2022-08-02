import express, { Request, Response } from "express"
import PrismaAdapter from "../database/PrismaAdapter";
import { IssueDatabaseRepository } from "../repository/IssueDatabaseRepository";
import HttpServer from "./HttpServer";
import routes from "../../main/routes"
import cors from "cors"

export default class ExpressAdapter implements HttpServer {
  app: any
  constructor() {
    this.app = express()
  
    this.app.use(express.json())
  
    this.app.use(cors({
        origin: 'http://localhost:3000'
    }))
    this.app.use(routes)
  
  }

  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async (request: Request, response: Response) => {
      const output = await callback(request.params, request.body)
      response.json(output)
    })
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`)
    })
  }
  
}