import { Users } from "src/entities/user.entity";
import { UserDTO } from "src/user-cases/Users/IUserDTO";
import { DeleteResult } from "typeorm";

export interface IUserRepository {
    save(user: UserDTO);
    delete(id: string): Promise<DeleteResult>;
    edit(user: Users): Promise<void>;
    findByEmail(email: string): Promise<Users>;
    findById(id: string): Promise<Users>;
    list(page?: number): Promise<Users[]>;
}