import { CreateCategoriesController } from "@/modules/cars/createCategories/CreateCategoriesController"
import { ListCategoriesController } from "@/modules/cars/listCategories/ListCategoriesController"
import { Router } from "express"
import multer from "multer"
import { ImportCategoriesController } from "@/modules/cars/importCategories/ImportCategoriesController"
import { ValidateUserAuthentication } from "@/middleware/ValidateUserAuthentication"

const upload = multer({
  dest: "./tmp",
})

const categoriesRoutes = Router()

const createCategoriesController = new CreateCategoriesController()
const listCategoriesController = new ListCategoriesController()
const importCategoriesController = new ImportCategoriesController()

categoriesRoutes.post("/create", createCategoriesController.handle)
categoriesRoutes.get(
  "/list",
  ValidateUserAuthentication,
  listCategoriesController.handle
)

categoriesRoutes.post(
  "/upload",
  upload.single("file"),
  importCategoriesController.handle
)

export { categoriesRoutes }
