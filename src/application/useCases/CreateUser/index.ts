import { PostgresUsersRepository } from "../../implementation/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };