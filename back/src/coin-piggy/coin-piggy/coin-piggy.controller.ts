import { Controller, Post, Res, Req, Get } from '@nestjs/common';
import { Request, Response, } from 'express';
import { CoinPiggyService } from './coin-piggy.service';
import { CoinPiggy } from './coin-piggy.interface';

@Controller('coin-piggy')
export class CoinPiggyController {

    constructor(private coinService: CoinPiggyService) { }

    @Post()
    new(@Req() request: Request, @Res() response: Response) {
        this.coinService.save(request.body).then(res => {
            response.json(res);
        }).catch(err => {
            response.status(500).json({ msg: 'Não foi possível salvar este porquinho, tente novamente.', err: err })
        })
    }

    @Get('byuser/:id')
    async getAllByUserId(@Req() request: Request, @Res() response: Response) {
        const id = parseInt(request.params.id);
        const coinPiggys = await this.coinService.getByUserId(id);
        return response.json(coinPiggys);
    }

    @Post('edit')
    async edit(@Req() request: Request, @Res() response: Response) {
        this.coinService.edit(request.body).then(res => {
            return response.json({ msg: 'Porquinho Editado' });
        }).catch(err => {
            return response.json({ msg: 'Não consegui editar o porquinho, tente novamente.', err: err })
        });
    }

    @Get('delete/:id')
    async delete(@Req() request: Request, @Res() response: Response) {
        this.coinService.delete(request.params.id).then(res => {
            return response.json({ msg: 'Porquinho apagado.' });
        }).catch(err => {
            return response.status(500).json({ msg: 'Não foi possível apagar esse porquinho.', err: err })
        })
    }

}
