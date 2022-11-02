import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username, password, email, driver_license } = request.body

    const createUserUseCase = new CreateUserUseCase()

    createUserUseCase.execute({
      name,
      username,
      password,
      email,
      driver_license,
    })

    return response.status(201).send()
  }
}

export { CreateUserController }
