import { prisma } from "@/database/PrismaClient"

class ListCategoriesUseCase {
  async execute() {
    const allCategories = await prisma.categories.findMany()

    return allCategories
  }
}
export { ListCategoriesUseCase }
