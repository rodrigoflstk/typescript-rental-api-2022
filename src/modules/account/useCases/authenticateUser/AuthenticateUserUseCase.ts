import { prisma } from "@/database/PrismaClient"
import * as bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"

interface InterfaceAuthenticateuser {
  username: string
  password: string
}

class AuthenticateUserUseCase {
  async execute({ username, password }: InterfaceAuthenticateuser) {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    })

    if (!user) {
      throw new Error("Invalid credentials!!")
    }

    const passwordVerification = await bcrypt.compare(password, user.password)

    if (!passwordVerification) {
      throw new Error("Invalid credentials!!")
    }

    const token = sign({ username }, "c4e70ca5e4aef7ce6dcb11e2dab50957", {
      subject: user.id,
      expiresIn: "1d",
    })

    return token
  }
}

export { AuthenticateUserUseCase }
