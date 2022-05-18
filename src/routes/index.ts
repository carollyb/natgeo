import { Router } from "express"
const CreateUserController = require("../controllers/user/CreateUserController")

const router = Router()

router.post("/user", CreateUserController.handle)

export default router