import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @Post()
    new(@Req() request: Request, @Res() response: Response) {
        const user: User = request.body;
        this.userService.save(user).then(res => {
            return response.status(200).send(res)
        }).catch(err => {
            return response.status(403).send({ msg: 'Não conseguimos te cadastrar, tente novamente.', err: err });
        })
    }

    @Post('edit')
    async edit(@Req() request: Request, @Res() response: Response) {
        this.userService.edit(request.body).then(res => {
            return response.json({ msg: 'ok' });
        }).catch(err => {
            return response.status(500).send({ msg: 'Não consegui alterar seu nome.', err: err });
        });
    }

    @Post('delete')
    async delete(@Req() request: Request, @Res() response: Response) {
        const user = await this.userService.verifyCredenciaisToDelete(request.body);
        if (user) {
            this.userService.delete(user.id).then(() => {
                return response.json({ msg: 'Usuário Removido' });
            }).catch(err => {
                return response.status(403).send({ msg: 'Não consegui te remover, tente novamente.', err: err });
            });
        } else {
            return response.status(403).json({ msg: 'Dados Inválidos' });
        }
    }
}
