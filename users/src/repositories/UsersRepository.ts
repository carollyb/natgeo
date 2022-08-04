export interface UsersRepositoryData {
    full_name: string,
    username: string,
    password: string,
}

export interface User {
    id?: string,
    full_name: string,
    username: string,
    password: string,
}

export interface UserUpdateData {
    id?: string,
    newFullName: string,
    newUsername: string,
    newPassword: string
}

export interface LoginUserData {
    username: string,
    password: string
}

export interface UsersRepository {
    create: (data: UsersRepositoryData) => Promise<User>
    listAllUsers: () => Promise<any[]>
    searchUser: (username: string) => Promise<any[]>
    sortUsersByUsername: (type: string) => Promise<any[]>
    update: (data: UserUpdateData) => Promise<User>
    delete: (id: string) => Promise<void>
    login: (data: LoginUserData) => Promise<any>
}