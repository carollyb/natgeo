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

export interface UsersRepository {
    create: (data: UsersRepositoryData) => Promise<User>
    listAllUsers: () => Promise<any[]>
    delete: (id: string) => Promise<void>
    update: (data: UserUpdateData) => Promise<User>
}