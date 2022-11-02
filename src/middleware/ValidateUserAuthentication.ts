import { prisma } from "@/database/PrismaClient"
import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface InterfacePayload {
  sub: string
}

async function ValidateUserAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token = request.headers.authorization
  const secretKey = "c4e70ca5e4aef7ce6dcb11e2dab50957"

  if (!token) {
    return response.status(401).json({
      message: "Token was not found!!",
    })
  }

  const [, tokenContent] = token.split(" ")

  try {
    const { sub: username } = verify(
      tokenContent,
      secretKey
    ) as InterfacePayload

    await prisma.user.findFirst({
      where: {
        username,
      },
    })

    return next()
  } catch (error) {
    return response.status(401).json({
      message: "This is a invalid token!!",
    })
  }
}

export { ValidateUserAuthentication }
