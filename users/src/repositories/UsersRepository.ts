export interface UsersRepositoryData {
    full_name: string,
    username: string,
    password: string,
}

export interface UsersRepository {
    create: (data: UsersRepositoryData) => Promise<void>
    delete: (id: string) => Promise<void>
}