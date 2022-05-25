import { Router } from "express"
import CreateUserController from "../controllers/user/CreateUserController"
import DeleteUserController from "../controllers/user/DeleteUserController"
import ListAllUsersController from "../controllers/user/ListAllUsersController"
import UpdateUserController from "../controllers/user/UpdateUserController"

const router = Router()

router.post("/user", CreateUserController.handle)
router.get("/users", ListAllUsersController.handle)
router.put("/user/:id", UpdateUserController.handle)
router.delete("/user/:id", DeleteUserController.handle)

export default router
