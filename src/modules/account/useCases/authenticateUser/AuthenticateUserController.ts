import { Request, Response } from "express"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateUserUseCase = new AuthenticateUserUseCase()

    const result = await authenticateUserUseCase.execute({
      username,
      password,
    })

    return response.json(result)
  }
}

export { AuthenticateUserController }
