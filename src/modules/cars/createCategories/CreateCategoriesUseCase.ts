import { prisma } from "@/database/PrismaClient"

interface ICreateCategories {
  name: string
  description: string
}

class CreateCategoriesUseCase {
  async execute({ name, description }: ICreateCategories) {
    const categoryExists = await prisma.categories.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    })

    if (categoryExists) {
      throw new Error("Category already exists!!")
    }

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
