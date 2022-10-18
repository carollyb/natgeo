import { CreateIssueUsecase } from "../src/usecases/issues/CreateIssueUsecase"

const createIssueCreationSpy = jest.fn();

const createIssueUsecase = new CreateIssueUsecase(
  { create: createIssueCreationSpy }
)

describe('Create issue', () => {
  it('should create a magazine issue', async () => {
    await expect(createIssueUsecase.execute({
      number: 20,
      date: "2020-10-10",
      cover: "teste unitário",
      file: "teste",
      language: "teste",
      topics: "teste"
    })).resolves.not.toThrow();

    expect(createIssueCreationSpy).toHaveBeenCalled()
  })

  it('should not create a magazine issue with empty number or file field(s)', async () => {
    await expect(createIssueUsecase.execute({
      number: 20,
      date: "2020-10-10",
      cover: "teste unitário",
      file: "",
      language: "teste",
      topics: "teste"
    })).rejects.toThrow();
  })
/*
  it('should not create a magazine issue with invalid date format', async () => {
    await expect(createIssueUsecase.execute({
      number: 20,
      date: "",
      cover: "teste unitário",
      file: "teste",
      language: "teste",
      topics: "teste"
    })).rejects.toThrow();
  })
  */
})