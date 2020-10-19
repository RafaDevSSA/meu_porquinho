import { Injectable, Inject } from "@nestjs/common";
import { CoinPiggyMoney } from "src/entities/coin-piggy-money.entity";
import { Repository } from "typeorm";

@Injectable()
export class CoinPiggyMoneyRepository  {

    constructor(@Inject('COIN_PIGGY_MONEY_REPOSITORY') private coinPiggyMoneyRepository: Repository<CoinPiggyMoney>) { }

    save(coinPiggyMoney: CoinPiggyMoney): Promise<CoinPiggyMoney> {
        return this.coinPiggyMoneyRepository.save(coinPiggyMoney);
    }

   /* getByCoinPiggy(idCoinPiggy: string): Promise<Goals[]> {
        return this.goalsRepository.find({
            where: { coinPiggy: idCoinPiggy }
        })
    }

    delete(id: number) {
        return this.goalsRepository.delete(id);
    }*/

}