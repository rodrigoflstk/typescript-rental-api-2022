import { Request, Response } from "express"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"

class CreateSpecificationController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    const createSpecificationUseCase = new CreateSpecificationUseCase()

    const result = await createSpecificationUseCase.execute({
      name,
      description,
    })

    return response.json(result)
  }
}

export { CreateSpecificationController }
