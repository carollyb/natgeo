import express, { Request, Response } from "express";
const port = process.env.PORT || 3002
import routes from "./routes"
import cors from "cors"

const app = express()

app.use(express.json())
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
    console.log(`Servidor rodando na porta ${port}`);
    
})