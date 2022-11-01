import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"

class CreateSpecificationController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    )

    const result = await createSpecificationUseCase.execute({
      name,
      description,
    })

    return response.json(result)
  }
}

export { CreateSpecificationController }
