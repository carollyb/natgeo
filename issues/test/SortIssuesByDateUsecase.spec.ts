import { SortIssuesByDateUsecase } from "../src/usecases/SortIssuesByDateUsecase"

const sortIssuesSpy = jest.fn()
const sortIssuesByDateUsecase = new SortIssuesByDateUsecase(
  { sortIssuesByDate: sortIssuesSpy }
)
describe('Sort issues by date', () => {
  it('should sort magazine issues by date of publication, from newest to oldest', async () => {
    
    await expect(sortIssuesByDateUsecase.execute('asc')).resolves.not.toThrow();
    
    expect(sortIssuesSpy).toHaveBeenCalled()
  })

  it('should sort magazine issues by date of publication, from oldest to newest', async () => {
    
    await expect(sortIssuesByDateUsecase.execute('desc')).resolves.not.toThrow();
    
    expect(sortIssuesSpy).toHaveBeenCalled()
  })

  /*
 it('should not sort magazine issues by date of publication, if query param is other than asc or desc', async () => {
    
    await expect(sortIssuesByDateUsecase.execute('2')).rejects.toThrow();
    
    expect(sortIssuesSpy).toHaveBeenCalled()
  })
  */

})