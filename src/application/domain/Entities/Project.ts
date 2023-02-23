import { Entity } from "../../core/domain/Entity";

interface IProjectProps {
    title: string,
    zip_code: number,
    cost: number,
    deadline: Date,
    username: string,
}

export class Project extends Entity<IProjectProps> {
    private constructor(props: IProjectProps, id?: string) {
        super(props, id)
    }

    static create(props: IProjectProps, id?: string) {
        const project = new Project(props, id);

        return project;
    }
}