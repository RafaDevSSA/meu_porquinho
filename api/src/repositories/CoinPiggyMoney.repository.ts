import { Injectable, Inject } from "@nestjs/common";
import { CoinPiggyMoney } from "src/entities/coin-piggy-money.entity";
import { Repository } from "typeorm";

@Injectable()
export class CoinPiggyMoneyRepository {

    constructor(@Inject('COIN_PIGGY_MONEY_REPOSITORY') private coinPiggyMoneyRepository: Repository<CoinPiggyMoney>) { }

    async save(coinPiggyMoney: CoinPiggyMoney, quantity: number): Promise<CoinPiggyMoney> {
        await this.delete(coinPiggyMoney);
        coinPiggyMoney.quantity = quantity;
        return this.coinPiggyMoneyRepository.save(coinPiggyMoney);
    }

    getByCoinPiggy(idCoinPiggy: string): Promise<CoinPiggyMoney[]> {
        return this.coinPiggyMoneyRepository.find({
            where: { coinPiggyId: idCoinPiggy }
        })
    }

    delete(coinPiggyMoney: CoinPiggyMoney):Promise<any> {
       return this.coinPiggyMoneyRepository.delete(coinPiggyMoney);
    }

}