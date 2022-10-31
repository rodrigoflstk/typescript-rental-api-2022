import { CreateSpecificationController } from "@/modules/cars/createSpecification/CreateSpecificationController"
import { Router } from "express"

const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationRoutes.post(
  "/specification/create",
  createSpecificationController.handle
)

export { specificationRoutes }
