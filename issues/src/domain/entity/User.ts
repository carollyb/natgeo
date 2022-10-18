export interface TUser {
  id?: string,
  full_name: string,
  username: string,
  password: string,
}

export interface TUserInput {
  full_name: string,
  username: string,
  password: string,
}

export interface TUserOutput {
  id: string,
  full_name: string,
  username: string,
  password: string,
}