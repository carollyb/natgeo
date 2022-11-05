import { GetSecureUrlUseCase } from "../../../usecases/s3/GetSecureUrlUseCase"

export class GetSecureUrlController {
  static async handle() {
    const getSecureUrlUseCase = new GetSecureUrlUseCase()
    try {
      const secureUrl = await getSecureUrlUseCase.execute()
      return secureUrl
    } catch (error) {
      if(error instanceof Error) return error.message
    }
  }
}