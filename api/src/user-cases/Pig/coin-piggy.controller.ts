import { Request, Controller, Post, Res, UseGuards, Get, Delete } from '@nestjs/common';
import { Response, Request as req } from 'express';
import { CoinPiggyView } from 'src/views/CoinPiggy.view';
import { JwtAuthGuard } from '../Auth/jwt-auth.guard';
import { CreateCoinPiggyService } from './CreateCoinPiggy';
import { GetCoinPiggyByUserService } from './GetCoinPiggyByUser';
import { DeleteCoinPiggyService } from './DeleteCoinPiggy';

@Controller('coin-piggy')
export class CoinPiggyController {

    constructor(
        private createCoinPiggy: CreateCoinPiggyService,
        private getCoinPiggyByUserService: GetCoinPiggyByUserService,
        private DeleteCoinPiggyService: DeleteCoinPiggyService
    ) { }

    // @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() data: req, @Res() response: Response) {
        try {
            const coinPiggy = await this.createCoinPiggy.execute(data.body);
            response.status(201).json(CoinPiggyView.returnView(coinPiggy));
        } catch (error) {
            response.status(500).json({
                message: error.message || 'Unexpected error.'
            });
        }

    }

    @Get('/:id')
    async getById(@Request() data: req, @Res() response: Response) {
        const coinPiggy = await this.getCoinPiggyByUserService.executeById(data.params.id);
        return response.json(coinPiggy);
    }
    
    @Get('/byUserId/:user')
    async getByUser(@Request() data: req, @Res() response: Response) {
        const coinPiggies = await this.getCoinPiggyByUserService.execute(data.params.user);
        return response.json(coinPiggies);
    }

    @Delete('/:id')
    async delete(@Request() data: req, @Res() response: Response) {
        try {
            await this.DeleteCoinPiggyService.execute(data.params.id);
            return response.status(200).send('Porquinho Removido!');
        } catch (error) {
            response.status(404).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
