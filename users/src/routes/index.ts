import { Router } from "express"
import AuthenticationController from "../application/controllers/auth/AuthenticationController"
import RefreshTokenUserController from "../application/controllers/refreshTokenUser/RefreshTokenUserController"
import CreateUserController from "../application/controllers/user/CreateUserController"
import DeleteUserController from "../application/controllers/user/DeleteUserController"
import ListAllUsersController from "../application/controllers/user/ListAllUsersController"
import SortUsersByUsernameController from "../application/controllers/user/SortUsersByUsernameController"
import UpdateUserController from "../application/controllers/user/UpdateUserController"
import ensureAuthenticated from "../application/middlewares/ensureAuthenticated"

const router = Router()

router.post("/user", ensureAuthenticated, CreateUserController.handle)
router.get("/users", ListAllUsersController.handle)
router.get("/users/sort", SortUsersByUsernameController.handle)
router.put("/user/:id", UpdateUserController.handle)
router.delete("/user/:id", DeleteUserController.handle)
router.post("/login", AuthenticationController.handle)
router.post("/refresh-token", RefreshTokenUserController.handle)

export default router
