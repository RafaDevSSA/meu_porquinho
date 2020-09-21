import { Injectable, Inject } from "@nestjs/common";
import { Users } from "src/entities/user.entity";
import { UserDTO } from "src/user-cases/Users/IUserDTO";
import { Repository } from "typeorm";
import { IUserRepository } from "./IUserRepository";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(@Inject('USERS_REPOSITORY') private usersRepository: Repository<Users>) { }

    save(user: Users): Promise<Users> {
        return this.usersRepository.save(user);
    }

    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    edit(user: Users): Promise<void> {
        throw new Error("Method not implemented.");
    }

    findByEmail(email: string): Promise<Users> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<Users> {
        throw new Error("Method not implemented.");
    }

    list(page?: number): Promise<Users[]> {
        throw new Error("Method not implemented.");
    }

}