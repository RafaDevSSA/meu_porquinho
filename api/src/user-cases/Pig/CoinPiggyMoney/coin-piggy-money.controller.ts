import { Controller, Get, Post, Request, Res } from '@nestjs/common';
import { Response, Request as req } from 'express';
import { CreateCoinPiggyMoneyService } from './CreateCoinPiggyMoney';
import { GetCoinPiggyMoneyService } from './GetCoinPiggyMoney';

@Controller('coin-piggy/money')
export class CoinPiggyMoneyController {

    constructor(private createCoinPiggyMoney: CreateCoinPiggyMoneyService, private getCoinPiggyMoney: GetCoinPiggyMoneyService) { }

    @Post()
    async save(@Request() data: req, @Res() response: Response) {
        try {
            await this.createCoinPiggyMoney.execute(data.body, data.body.quantity);
            return response.status(201).send('ok');
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    @Get('/:coinPiggyId')
    async get(@Request() data: req, @Res() response: Response){
        const coinPiggyMoney =  await this.getCoinPiggyMoney.execute(data.params.coinPiggyId);
        return response.json(coinPiggyMoney);
    }
}
