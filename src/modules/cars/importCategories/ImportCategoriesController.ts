import { Request, Response } from "express"

class ImportCategoriesController {
  async handle(request: Request, response: Response) {
    const { file } = request
    console.log(file)

    return response.send()
  }
}

export { ImportCategoriesController }
