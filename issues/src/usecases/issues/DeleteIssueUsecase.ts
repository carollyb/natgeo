import { IssuesRepository } from "../domain/repository/IssuesRepository";

export class DeleteIssueUsecase {
  constructor(
    private issuesRepository: IssuesRepository
  ) {}

  async execute(id: string) {
    
    const issueToDelete = await this.issuesRepository.listOneIssue(id)
    
    if(issueToDelete == null) {
      throw new Error(`Issue not found - could not be deleted`)
    }
    const deletedIssue = await this.issuesRepository.deleteIssue(id)

    
    return deletedIssue
  }
}