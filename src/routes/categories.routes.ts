import { CreateCategoriesController } from "@/modules/cars/createCategories/CreateCategoriesController"
import { Router } from "express"

const categoriesRoutes = Router()

const createCategoriesController = new CreateCategoriesController()

categoriesRoutes.post("/create/category", createCategoriesController.handle)

export { categoriesRoutes }
