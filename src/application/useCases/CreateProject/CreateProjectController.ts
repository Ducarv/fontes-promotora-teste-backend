import { Request, Response } from "express";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

export class CreateProjectController {
    constructor(
        private createProjectUseCase: CreateProjectUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;
        const { title, zip_code, deadline, cost } = request.body;

        try {
            await this.createProjectUseCase.execute({
                title,
                zip_code,
                cost,
                deadline,
                username
            })

            return response.status(201).send("project created")
        } catch(err) {
            return response.status(400).send("cannot create a project");
        }
    }
}