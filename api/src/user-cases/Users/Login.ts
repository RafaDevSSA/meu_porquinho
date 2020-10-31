import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/User.repository';
import { CredentialsDTO } from './IcredentialsDTO';
import { compare } from 'bcrypt';
import { AuthProvider } from 'src/providers/auth.provider';
import { UserView } from 'src/views/User.view';

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
               const token = await this.authProvider.login(user);
               return UserView.returnView(user,token);
            }
            throw new Error('Senha Incorreta.');
        } else {
            throw new Error('Dados Inválidos');
        }
    }
}
