import { Router } from "express"
const CreateUserController = require("../controllers/user/CreateUserController")
const ListAllUsersController = require("../controllers/user/ListAllUsersController")

const router = Router()

router.post("/user", CreateUserController.handle)
router.get("/users", ListAllUsersController.handle)

export default router