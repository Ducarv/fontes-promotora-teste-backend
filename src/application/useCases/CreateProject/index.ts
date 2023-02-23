import { PostgresProjectsRepository } from "../../implementation/PostgresProjectsRepository";
import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

const postgreProjectsRepository = new PostgresProjectsRepository();

const createProjectUseCase = new CreateProjectUseCase(postgreProjectsRepository);

const createProjectController = new CreateProjectController(createProjectUseCase);

export { createProjectController };