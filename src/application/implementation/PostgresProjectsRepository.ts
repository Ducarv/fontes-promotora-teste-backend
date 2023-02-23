import { prisma } from "../../lib/prisma";
import { Project } from "../domain/Entities/Project";
import { IProjectsRepository } from "../repositories/IProjectsRepository";

export class PostgresProjectsRepository implements IProjectsRepository {
    async save(project: Project): Promise<void> {
        await prisma.project.create({
            data: {
                title: project.props.title,
                zip_code: project.props.zip_code,
                cost: project.props.cost,
                deadline: project.props.deadline,
                username: project.props.username
            }
        })
    }
}