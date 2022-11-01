import { Router } from "express"
import { categoriesRoutes } from "./categories.routes"
import { specificationRoutes } from "./specification.routes"
import { userRoutes } from "./user.routes"

const routes = Router()

routes.use("/user", userRoutes)
routes.use("/specification", specificationRoutes)
routes.use("/categories", categoriesRoutes)

export { routes }
