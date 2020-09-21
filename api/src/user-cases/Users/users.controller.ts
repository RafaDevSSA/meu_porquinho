import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUser } from './CreateUser';
import { UserDTO } from './IUserDTO';

@Controller('users')
export class UsersController {

    constructor(private createUser: CreateUser) { }

    @Post('')
    async create(@Body() data: UserDTO, @Res() response: Response) {
        try {
            await this.createUser.execute(data);
            response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}
