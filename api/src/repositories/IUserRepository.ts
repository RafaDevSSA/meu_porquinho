import { Users } from "src/entities/user.entity";
import { UserDTO } from "src/user-cases/Users/IUserDTO";

export interface IUserRepository {
    save(user: UserDTO);
    delete(id: number): Promise<void>;
    edit(user: Users): Promise<void>;
    findByEmail(email: string): Promise<Users>;
    findById(id: string): Promise<Users>;
    list(page?: number): Promise<Users[]>;
}