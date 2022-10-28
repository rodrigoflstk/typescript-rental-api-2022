import { CreateCategoriesController } from "@/modules/cars/createCategories/CreateCategoriesController"
import { ListCategoriesController } from "@/modules/cars/listCategories/ListCategoriesController"
import { Router } from "express"

const categoriesRoutes = Router()

const createCategoriesController = new CreateCategoriesController()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.post("/create/category", createCategoriesController.handle)
categoriesRoutes.get("/list/categories", listCategoriesController.handle)

export { categoriesRoutes }
