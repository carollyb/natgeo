import { Router } from "express";
import ListAllIssuesController from "../controllers/ListAllIssuesController";

const router = Router()

router.get("/issues", ListAllIssuesController.handle)

export default router