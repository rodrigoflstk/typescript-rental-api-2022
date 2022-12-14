import { AppError } from "@/AppError"
import { prisma } from "@/database/PrismaClient"
import * as bcrypt from "bcrypt"

interface CreateUserDto {
  name: string
  username: string
  password: string
  email: string
  driver_license: string
}
class CreateUserUseCase {
  async execute({
    name,
    username,
    password,
    email,
    driver_license,
  }: CreateUserDto) {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.user.findFirst({
      where: {
        username,
        email,
      },
    })

    if (!user) {
      throw new AppError("Email or username already in use!")
    }

    const userData = prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
        driver_license,
        email,
      },
    })

    return userData
  }
}

export { CreateUserUseCase }
