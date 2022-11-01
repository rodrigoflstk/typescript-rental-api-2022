import { CreateCategoriesController } from "@/modules/cars/createCategories/CreateCategoriesController"
import { ListCategoriesController } from "@/modules/cars/listCategories/ListCategoriesController"
import { Router } from "express"
import multer from "multer"
import { ImportCategoriesController } from "@/modules/cars/importCategories/ImportCategoriesController"

const upload = multer({
  dest: "./tmp",
})

const categoriesRoutes = Router()

const createCategoriesController = new CreateCategoriesController()
const listCategoriesController = new ListCategoriesController()
const importCategoriesController = new ImportCategoriesController()

categoriesRoutes.post("/categories/create", createCategoriesController.handle)
categoriesRoutes.get("/categories/list", listCategoriesController.handle)

categoriesRoutes.post(
  "/categories/upload",
  upload.single("file"),
  importCategoriesController.handle
)

export { categoriesRoutes }
