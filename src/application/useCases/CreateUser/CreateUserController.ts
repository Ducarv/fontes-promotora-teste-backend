import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, password, username } = request.body;

        try {
            await this.createUserUseCase.execute({
                name,
                password,
                username
            })

            return response.status(201).send("user successfully created")
        } catch(err) {
            return response.status(400).send("cannot create user");
        }
    }
}