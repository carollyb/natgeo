import { ListAllIssuesUsecase } from "../src/usecases/ListAllIssuesUsecase"

const listIssueSpy = jest.fn()
const listIssueUsecase = new ListAllIssuesUsecase(
  { listAllIssues: listIssueSpy }
)
describe('List issues', () => {
  it('should list all magazine issues', async () => {
    
    await expect(listIssueUsecase.execute()).resolves.not.toThrow();
    
    expect(listIssueSpy).toHaveBeenCalled()
  })
})