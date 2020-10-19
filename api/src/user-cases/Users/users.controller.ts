import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUser } from './CreateUser';
import { CredentialsDTO } from './IcredentialsDTO';
import { UserDTO } from './IUserDTO';
import { Login } from './Login';

@Controller('users')
export class UsersController {

    constructor(private createUserUC: CreateUser, private loginUserUC: Login) { }

    @Post('')
    async create(@Body() data: UserDTO, @Res() response: Response) {
        try {
            const token = await this.createUserUC.execute(data);
            response.status(201).json(token);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    @Post('login')
    async login(@Body() data: CredentialsDTO, @Res() response: Response) {
        try {
            const token = await this.loginUserUC.execute(data);
            response.status(201).json(token);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}
