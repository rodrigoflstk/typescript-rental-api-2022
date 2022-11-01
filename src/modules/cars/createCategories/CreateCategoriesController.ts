import { Request, Response } from "express"
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase"
import "reflect-metadata"

class CreateCategoriesController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createCategoriesUseCase = new CreateCategoriesUseCase()

    const result = await createCategoriesUseCase.execute({
      name,
      description,
    })

    return response.json(result)
  }
}

export { CreateCategoriesController }
