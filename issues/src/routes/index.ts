import { Router } from "express";
import CreateIssueController from "../controllers/CreateIssueController";
import ListAllIssuesController from "../controllers/ListAllIssuesController";
import SearchIssueByTopicController from "../controllers/SearchIssueByTopicController";
import SortIssuesByDateController from "../controllers/SortIssuesByDateController";

const router = Router()

router.get("/issues", ListAllIssuesController.handle)
router.get("/issues/sort", SortIssuesByDateController.handle)
router.get("/issues/search", SearchIssueByTopicController.handle)
router.post("/issues", CreateIssueController.handle)

export default router