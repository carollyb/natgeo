import { Router } from "express";
import CreateIssueController from "../../application/controllers/CreateIssueController";
import DeleteIssueController from "../../application/controllers/DeleteIssueController";
import ListAllIssuesController from "../../application/controllers/ListAllIssuesController";
import ListOneIssueController from "../../application/controllers/ListOneIssueController";
import SearchIssueByDateRangeController from "../../application/controllers/SearchIssueByDateRangeController";
import SearchIssueByTopicController from "../../application/controllers/SearchIssueByTopicController";
import SortIssuesByDateController from "../../application/controllers/SortIssuesByDateController";

const router = Router()

router.get("/issues", ListAllIssuesController.handle)
router.get("/issues/sort", SortIssuesByDateController.handle)
router.get("/issues/search", SearchIssueByTopicController.handle)
router.get("/issues/date", SearchIssueByDateRangeController.handle)
router.post("/issues", CreateIssueController.handle)
router.delete("/issue/:id", DeleteIssueController.handle)
router.get("/issue/:id", ListOneIssueController.handle)


export default router