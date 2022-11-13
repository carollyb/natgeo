import { usersRepository } from "../../../server";

export class ListAllUsersController {
  static async handle(params: any) {
    const { offset, limit } = params
    try {
      const results = await usersRepository.listAllUsers(offset, limit)
      return results
    } catch (error) {
      if(error instanceof Error) error.message
    }
  }
}