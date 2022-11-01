import { prisma } from "@/database/PrismaClient"
import { CreateUserDto } from "../../dtos/CreateUserDto"

class CreateUserUseCase {
  async execute({
    name,
    username,
    password,
    email,
    driver_license,
  }: CreateUserDto) {
    prisma.user.create({
      data: {
        name,
        username,
        password,
        driver_license,
        email,
      },
    })
  }
}

export { CreateUserUseCase }
