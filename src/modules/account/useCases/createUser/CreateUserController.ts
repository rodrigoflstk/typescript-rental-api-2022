import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username, password, driver_license, email } = request.body

    const createUserUseCase = new CreateUserUseCase()

    createUserUseCase.execute({
      name,
      username,
      password,
      driver_license,
      email,
    })

    return response.status(201).send()
  }
}

export { CreateUserController }
