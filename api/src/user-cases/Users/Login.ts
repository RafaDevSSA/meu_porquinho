import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/User.repository';
import { CredentialsDTO } from './IcredentialsDTO';
import { compare } from 'bcrypt';
import { AuthProvider } from 'src/providers/auth.provider';

@Injectable()
export class Login {

    constructor(
        private userRepository: UserRepository,
        private authProvider: AuthProvider,
    ) { }

    async execute(data: CredentialsDTO) {
        const user = await this.userRepository.findByEmail(data.email);
        if (user) {
            const passwordValidate = await compare(data.password, user.password);
            if(passwordValidate){
                return this.authProvider.login(user);
            }
            throw new Error('Senha Incorreta.');
        } else {
            throw new Error('Dados Inválidos');
        }
    }
}
