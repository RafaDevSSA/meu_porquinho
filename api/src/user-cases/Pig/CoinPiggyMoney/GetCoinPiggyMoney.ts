import { Injectable } from '@nestjs/common';
import { CoinPiggyMoneyRepository } from 'src/repositories/CoinPiggyMoney.repository';

@Injectable()
export class GetCoinPiggyMoneyService {

    constructor(private coinPiggyMoneyRepository: CoinPiggyMoneyRepository) { }

    async execute(coinPiggyId: string) {
        return await this.coinPiggyMoneyRepository.getByCoinPiggy(coinPiggyId);
    }
}
