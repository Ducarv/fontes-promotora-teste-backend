import { Entity } from "../../core/domain/Entity";

interface IUserProps {
    name: string,
    password: string,
    username: string
}

export class User extends Entity<IUserProps> {
    private constructor(props: IUserProps, id?: string) {
        super(props, id);
    }

    static create(props: IUserProps, id?: string) {
        const user = new User(props, id);

        return user;
    }
}