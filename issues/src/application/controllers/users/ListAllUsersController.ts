import { usersRepository } from "../../../server";

export class ListAllUsersController {
  static async handle() {
    
    const results = await usersRepository.listAllUsers()
    try {
      return results
    } catch (error) {
      if(error instanceof Error) error.message
    }
  }
}