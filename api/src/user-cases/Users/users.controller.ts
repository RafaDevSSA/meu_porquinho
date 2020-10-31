import { Request, Controller, Post, Res, UseGuards, Delete, Body } from '@nestjs/common';
import { Response, Request as req } from 'express';
import { CreateUser } from './CreateUser';
import { DeleteUserService } from './DeleteUser';
import { CredentialsDTO } from './IcredentialsDTO';
import { UserDTO } from './IUserDTO';
import { Login } from './Login';

@Controller('users')
export class UsersController {

    constructor(private createUserUC: CreateUser, private loginUserUC: Login, private deleteUserUC: DeleteUserService) { }

    @Post('')
    async create(@Body() data: UserDTO, @Res() response: Response) {
        try {
            const user = await this.createUserUC.execute(data);
            response.status(201).json(user);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    @Post('login')
    async login(@Body() data: CredentialsDTO, @Res() response: Response) {
        try {
            const user = await this.loginUserUC.execute(data);
            response.status(201).json(user);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    @Delete('/:id')
    async delete(@Request() data: req, @Res() response: Response){
        try {
            await this.deleteUserUC.execute(data.params.id);
            return response.send('Sua conta foi excluida :(, volte assim que der vontade!');
        } catch (error) {
            return response.status(500).json({message: error.message || 'Unexpected error.'})    
        }
    }
}
