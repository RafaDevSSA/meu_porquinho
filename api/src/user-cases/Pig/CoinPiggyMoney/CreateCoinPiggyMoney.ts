import { Injectable } from '@nestjs/common';
import { CoinPiggy } from 'src/entities/coin-piggy.entity';
import { CoinPiggyRepository } from 'src/repositories/CoinPiggy.repository';
import { CoinPiggyMoneyRepository } from 'src/repositories/CoinPiggyMoney.repository';
import { UserRepository } from 'src/repositories/User.repository';
import { CoinPiggyMoneyDTO } from './ICoinPiggyMoneyDTO';

@Injectable()
export class CreateCoinPiggyMoneyService {

    constructor(private coinPiggyMoneyRepository: CoinPiggyMoneyRepository) { }

    async execute(coinPiggyDTO: CoinPiggyMoneyDTO, quantity: number) {
        delete coinPiggyDTO.quantity;
        return await this.coinPiggyMoneyRepository.save(coinPiggyDTO, quantity)
    }
}
