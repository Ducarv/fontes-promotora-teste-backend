import { IProjectsRepository } from "../../repositories/IProjectsRepository";
import { ICreateProjectDTO } from "./CreateProject.dto";
import { Project } from '../../domain/Entities/Project';

export class CreateProjectUseCase {
    constructor(
        private projectRepository: IProjectsRepository
    ) {}

    async execute({ title, zip_code, cost, deadline, username }: ICreateProjectDTO) {
        const project = Project.create({
            title,
            zip_code,
            cost,
            deadline,
            username
        })

        await this.projectRepository.save(project);
    }
}