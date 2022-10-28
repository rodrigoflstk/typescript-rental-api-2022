import { prisma } from "@/database/PrismaClient"

interface ICreateSpecification {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  async execute({ name, description }: ICreateSpecification) {
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
