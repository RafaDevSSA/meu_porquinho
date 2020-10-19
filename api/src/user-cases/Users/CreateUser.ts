import { Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { Users } from "src/entities/user.entity";
import { AuthProvider } from "src/providers/auth.provider";
import { EmailProvider, Mail } from "src/providers/email.providers";
import { UserRepository } from "src/repositories/User.repository";
import { UserDTO } from "./IUserDTO";

@Injectable()
export class CreateUser {

    constructor
        (
            private userRepository: UserRepository,
            private authProvider: AuthProvider,
            private emailProvider: EmailProvider
        ) { }

    async execute(data: UserDTO) {
        const user = new Users(data);
        user.password = await hash(user.password, 10);
        const userSalved = await this.userRepository.save(user);
        const mail: Mail = {
            name: user.firstName,
            to: user.email,
            from: process.env.APP_MAIL_FROM,
            subject: "Bem vindo ao Join Money",
            html: 'teste'
        }
        try {
            await this.emailProvider.sendWelcomeMail(mail)
        } catch (error) {
            throw new Error(`Não consegui enviar o email - ${error}`);
        }
        return this.authProvider.login(userSalved);
    }
}