import { IssuesRepository } from "../domain/repository/IssuesRepository";

export default class ListOneIssueUsecase {
  constructor(
    private issuesRepository: IssuesRepository
  ) {}

  async execute(id: string) {
    const listOneIssue  = await this.issuesRepository.listOneIssue(id)
    return listOneIssue
  }
}