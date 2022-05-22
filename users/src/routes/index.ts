import { Router } from "express"
import CreateUserController from "../controllers/user/CreateUserController"
import ListAllUsersController from "../controllers/user/ListAllUsersController"

const router = Router()

router.post("/user", CreateUserController.handle)
router.get("/users", ListAllUsersController.handle)

export default router
