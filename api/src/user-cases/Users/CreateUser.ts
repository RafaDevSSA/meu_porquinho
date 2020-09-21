import { Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { Users } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/User.repository";
import { UserDTO } from "./IUserDTO";

@Injectable()
export class CreateUser {

    constructor(private userRepository: UserRepository) { }

    async execute(data: UserDTO) {
        const user = new Users(data);
        user.password = await hash(user.password,10);
        await this.userRepository.save(user);
    }
}