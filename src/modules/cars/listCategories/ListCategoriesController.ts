import { Request, Response } from "express"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const listCategoriesUseCase = new ListCategoriesUseCase()
    const allCategories = await listCategoriesUseCase.execute()
    return response.json(allCategories)
  }
}

export { ListCategoriesController }
