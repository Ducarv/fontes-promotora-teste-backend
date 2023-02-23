import { Request ,Response, Router } from "express";
import { createUserController } from "./application/useCases/CreateUser";
import { createProjectController } from "./application/useCases/CreateProject";

const router = Router();

// create users - POST /users
router.post("/users", (request: Request, response: Response) => {
   return createUserController.handle(request, response);
})

// create projects - POST /project/:usename
router.post("/project/:username", (request: Request, response: Response) => {
   return createProjectController.handle(request, response);
})

export { router };