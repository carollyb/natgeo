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

export interface UsersRepository {
    create: (data: UsersRepositoryData) => Promise<User>
    delete: (id: string) => Promise<void>
}