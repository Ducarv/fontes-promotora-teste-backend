import { User } from "../domain/Entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { prisma } from '../../lib/prisma';

export class PostgresUsersRepository implements IUsersRepository {
    async save(user: User): Promise<void> {
        await prisma.user.create({
            data: {
                name: user.props.name,
                password: user.props.password,
                username: user.props.username
            }
        }) 
    }
}