import { Router } from "express";
import CreateIssueController from "../controllers/CreateIssueController";
import ListAllIssuesController from "../controllers/ListAllIssuesController";

const router = Router()

router.get("/issues", ListAllIssuesController.handle)
router.post("/issues", CreateIssueController.handle)

export default router