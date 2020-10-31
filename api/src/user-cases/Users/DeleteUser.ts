import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/User.repository';

@Injectable()
export class DeleteUserService {

    constructor(private userRepository: UserRepository) { }

    async execute(id: string) {
        return await this.userRepository.delete(id);
    }
}
