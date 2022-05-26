import express, { Request, Response } from "express";
const port = process.env.PORT || 3001
import routes from "./routes"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "API NatGeo"
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})