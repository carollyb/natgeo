import { PrismaIssuesRepository } from "../src/repositories/prisma/PrismaIssuesRepository"
import { CreateIssueUsecase } from "../src/usecases/CreateIssueUsecase"

describe('Create issue', () => {
  it('should create a magazine issue', async () => {
    const prismaIssuesRepository = new PrismaIssuesRepository()
    const createIssueUsecase = new CreateIssueUsecase(
      prismaIssuesRepository
    )
    await expect(createIssueUsecase.execute({
      number: 20,
      date: "2020-10-10",
      cover: "teste unitário",
      file: "teste",
      language: "teste",
      topics: "teste"
    })).resolves.not.toThrow();    
  })
})