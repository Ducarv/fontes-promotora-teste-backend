import { User } from "../../domain/Entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./CreateUser.dto";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async execute({ name, password, username }: ICreateUserDTO) {
        const user = User.create({
            name,
            password,
            username
        });

        await this.usersRepository.save(user)
    }
}