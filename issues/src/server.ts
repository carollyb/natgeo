import express, { Request, Response } from "express";
const port = process.env.PORT || 3002
import routes from "./main/routes"
import cors from "cors"
import PrismaAdapter from "./infra/database/PrismaAdapter";
import { IssueDatabaseRepository } from "./infra/repository/IssueDatabaseRepository";

const app = express()

app.use(express.json())

const connection = new PrismaAdapter()
export const issuesRepository = new IssueDatabaseRepository(connection)

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(routes)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "API Natgeo - Issues"
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})