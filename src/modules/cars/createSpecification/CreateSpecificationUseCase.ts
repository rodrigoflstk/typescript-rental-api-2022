import { AppError } from "@/AppError"
import { prisma } from "@/database/PrismaClient"

interface ICreateSpecification {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  async execute({ name, description }: ICreateSpecification) {
    const SpecificationExists = await prisma.specifications.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    })

    if (SpecificationExists) {
      throw new AppError("Specification already exists!!")
    }

    const categories = await prisma.specifications.create({
      data: {
        name,
        description,
      },
    })

    return categories
  }
}

export { CreateSpecificationUseCase }
