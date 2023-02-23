import { User } from "../domain/Entities/User";

export interface IUsersRepository {
    save(user: User): Promise<void>
}