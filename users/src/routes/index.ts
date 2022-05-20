import { Router } from "express"
import CreateUserController from "../controllers/user/CreateUserController"
import ListAllUsersController from "../controllers/user/ListAllUsersController"

const createUserController = new CreateUserController()
const listAllUsersController = new ListAllUsersController()

const router = Router()

router.post("/user", createUserController.handle)
router.get("/users", listAllUsersController.handle)

export default router
