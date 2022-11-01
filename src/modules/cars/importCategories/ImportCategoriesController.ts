import { Request, Response } from "express"
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase"

class ImportCategoriesController {
  async handle(request: Request, response: Response) {
    const { file } = request

    if (!file) {
      return response.status(400).json({ message: "Bad request" })
    }

    const importCategoriesUseCase = new ImportCategoriesUseCase()

    const result = importCategoriesUseCase.execute(file)

    return response.json(result)
  }
}

export { ImportCategoriesController }
