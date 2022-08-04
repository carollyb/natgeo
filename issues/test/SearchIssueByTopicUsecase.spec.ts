import { SearchIssueByTopicUsecase } from "../src/usecases/SearchIssueByTopicUsecase"

const searchIssuesSpy = jest.fn()
const searchIssueByTopicUsecase = new SearchIssueByTopicUsecase(
  { searchByTopic: searchIssuesSpy }
)
describe('Search issues by topic', () => {
  /*it('should search magazine issues by topic', async () => {
    
    await expect(searchIssueByTopicUsecase.execute('Tecnologia')).resolves.not.toThrow();
    
    expect(searchIssuesSpy).toHaveBeenCalled()
  })*/

  it('should throw error if topic does not exist', async () => {
    
    await expect(searchIssueByTopicUsecase.execute('Random')).rejects.toThrow()
    
    expect(searchIssuesSpy).toHaveBeenCalled()
  })

})