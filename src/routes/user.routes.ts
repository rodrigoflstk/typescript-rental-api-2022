import { AuthenticateUserController } from "@/modules/account/useCases/authenticateUser/AuthenticateUserController"
import { CreateUserController } from "@/modules/account/useCases/createUser/CreateUserController"
import { Router } from "express"

const userRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

userRoutes.post("/signup", createUserController.handle)
userRoutes.post("/signin", authenticateUserController.handle)

export { userRoutes }
