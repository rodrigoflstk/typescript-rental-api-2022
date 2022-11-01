import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase"

class CreateCategoriesController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createCategoriesUseCase = container.resolve(CreateCategoriesUseCase)

    const result = await createCategoriesUseCase.execute({
      name,
      description,
    })

    return response.json(result)
  }
}

export { CreateCategoriesController }
