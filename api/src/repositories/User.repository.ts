import { Injectable, Inject } from "@nestjs/common";
import { Users } from "src/entities/user.entity";
import { UserDTO } from "src/user-cases/Users/IUserDTO";
import { DeleteResult, Repository } from "typeorm";
import { IUserRepository } from "./IUserRepository";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(@Inject('USERS_REPOSITORY') private usersRepository: Repository<Users>) { }

    save(user: Users): Promise<Users> {
        return this.usersRepository.save(user);
    }

    delete(id: string): Promise<DeleteResult> {
       return this.usersRepository.delete(id)
    }

    edit(user: Users): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findByEmail(email: string): Promise<Users> {
        return await this.usersRepository.findOne({ email });
    }

    async findById(id: string): Promise<Users> {
        return await this.usersRepository.findOne({ id });
    }

    list(page?: number): Promise<Users[]> {
        throw new Error("Method not implemented.");
    }

}