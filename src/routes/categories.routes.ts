import { CreateCategoriesController } from "@/modules/cars/createCategories/CreateCategoriesController"
import { importCategoryController } from "@/modules/cars/importCategories/indext"
import { ListCategoriesController } from "@/modules/cars/listCategories/ListCategoriesController"
import { Router } from "express"
import multer from "multer"

const upload = multer({
  dest: "./tmp",
})

const categoriesRoutes = Router()

const createCategoriesController = new CreateCategoriesController()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.post("/categories/create", createCategoriesController.handle)
categoriesRoutes.get("/categories/list", listCategoriesController.handle)

categoriesRoutes.post(
  "/categories/upload",
  upload.single("file"),
  importCategoryController.handle
)

export { categoriesRoutes }
