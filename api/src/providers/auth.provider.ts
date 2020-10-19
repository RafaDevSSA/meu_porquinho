import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/User.repository';

@Injectable()
export class AuthProvider {

    constructor(
        private jwtService: JwtService,
        private userRepository: UserRepository
    ) { }

    async validateUser(userEmail: string, userPassword: string) {
        const user = await this.userRepository.findByEmail(userEmail);
        if (user && user.password === userPassword) {
            const { firstName, email, id } = user;
            return { firstName, email, id };
        } else {
            return false;
        }
    }


    async login(user: Users) {
        const payload = { email: user.email, sub: user.id, name: user.firstName };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
