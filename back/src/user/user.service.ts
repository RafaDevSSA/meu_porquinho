import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { compare } from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }

    async save(user): Promise<any> {
        const obj = this.userRepository.create(user);
        return this.userRepository.save(obj);
    }

    async edit(user): Promise<any> {
        const obj = await this.userRepository.findOne(user.id);
        obj.first_name = user.firstName;
        obj.last_name = user.lastName;
        return this.userRepository.save(obj);
    }

    async delete(id): Promise<any> {
        return this.userRepository.delete(id);
    }

    async verifyCredenciaisToDelete(credenciais: User): Promise<any> {
        const user = await this.userRepository.findOne({ select: ['id', 'password'], where: { email: credenciais.email } });
        if (user && await compare(credenciais.password, user.password)) {
            return user;
        } else {
            return false;
        }
    }

}
