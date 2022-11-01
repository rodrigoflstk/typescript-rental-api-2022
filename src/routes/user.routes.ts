import { CreateUserController } from "@/modules/account/useCases/createUser/CreateUserController"
import { Router } from "express"

const userRoutes = Router()

const createUserController = new CreateUserController()

userRoutes.post("/signup", createUserController.handle)

export { userRoutes }
