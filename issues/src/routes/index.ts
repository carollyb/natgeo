import { Router } from "express";
import CreateIssueController from "../controllers/CreateIssueController";
import ListAllIssuesController from "../controllers/ListAllIssuesController";
import SearchIssueByDateRangeController from "../controllers/SearchIssueByDateRangeController";
import SearchIssueByTopicController from "../controllers/SearchIssueByTopicController";
import SortIssuesByDateController from "../controllers/SortIssuesByDateController";

const router = Router()

router.get("/issues", ListAllIssuesController.handle)
router.get("/issues/sort", SortIssuesByDateController.handle)
router.get("/issues/search", SearchIssueByTopicController.handle)
router.get("/issues/date", SearchIssueByDateRangeController.handle)
router.post("/issues", CreateIssueController.handle)

export default router