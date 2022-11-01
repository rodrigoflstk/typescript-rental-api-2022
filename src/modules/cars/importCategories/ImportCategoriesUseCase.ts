import fs from "fs"
import { parse as csvParse } from "csv-parse"
import { prisma } from "@/database/PrismaClient"

interface InterfaceImportCategory {
  name: string
  description: string
}
class ImportCategoriesUseCase {
  async loadCategories(
    file: Express.Multer.File
  ): Promise<InterfaceImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: InterfaceImportCategory[] = []
      const parsedFile = csvParse()

      stream.pipe(parsedFile)

      parsedFile
        .on("data", (csvdata) => {
          const [name, description] = csvdata
          categories.push({
            name,
            description,
          })
        })
        .on("end", () => {
          resolve(categories)
        })
        .on("error", (err) => {
          reject(err)
        })
    })
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async (category) => {
      const { name, description } = category

      const categoryExists = await prisma.categories.findFirst({
        where: {
          name: {
            equals: name,
            mode: "insensitive",
          },
        },
      })

      if (!categoryExists) {
        const categoryResult = await prisma.categories.create({
          data: {
            name,
            description,
          },
        })
        return categoryResult
      }
    })
  }
}

export { ImportCategoriesUseCase }
