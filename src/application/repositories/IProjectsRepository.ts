import { Project } from "../domain/Entities/Project";

export interface IProjectsRepository {
    save(project: Project): Promise<void>
}