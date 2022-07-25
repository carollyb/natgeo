import { PrismaIssuesRepository } from "../src/repositories/prisma/PrismaIssuesRepository"
import { ListAllIssuesUsecase } from "../src/usecases/ListAllIssuesUsecase"

describe('List issues', () => {
  it('should list all magazine issues', async () => {
    const prismaIssuesRepository = new PrismaIssuesRepository()
    const listIssueUsecase = new ListAllIssuesUsecase(
      prismaIssuesRepository
    )
    await expect(listIssueUsecase.execute()).resolves.not.toThrow();    
  })
})