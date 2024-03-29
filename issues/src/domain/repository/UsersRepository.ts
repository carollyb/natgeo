import { TUser, TUserInput, TUserOutput } from "../entity/User"

export interface UsersRepository {
  createUser: (data: TUserInput) => Promise<TUser>
  listAllUsers: (offset: number, limit: number) => Promise<TUser[]>
  searchUser: (username: string) => Promise<TUser | null >
  searchUserById: (id: string) => Promise<any>
  sortUsersByUsername: (type: string) => Promise<TUser[]>
  updateUser: (id: string, data: Partial<TUser>) => Promise<TUser>
  deleteUser: (id: string) => Promise<TUser>
  login: (data: any) => Promise<any>
  refreshToken: (user_id: string) => Promise<void>
}