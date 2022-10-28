import { prisma } from "@/database/PrismaClient"

interface ICreateCategories {
  name: string
  description: string
}

class CreateCategoriesUseCase {
  async execute({ name, description }: ICreateCategories) {
    const categories = await prisma.categories.create({
      data: {
        name,
        description,
      },
    })

    return categories
  }
}

export { CreateCategoriesUseCase }
