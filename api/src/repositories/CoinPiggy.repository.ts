import { Injectable, Inject } from "@nestjs/common";
import { CoinPiggy } from "src/entities/coin-piggy.entity";
import { PigDTO } from "src/user-cases/Pig/IpigDTO";
import { Repository } from "typeorm";

@Injectable()
export class CoinPiggyRepository {

    constructor(@Inject('COIN_PIGGY_REPOSITORY') private coinPiggyRepository: Repository<CoinPiggy>) { }

    save(coinPiggy: CoinPiggy): Promise<CoinPiggy> {
        return this.coinPiggyRepository.save(coinPiggy);
    }

    getById(id): Promise<CoinPiggy> {
        return this.coinPiggyRepository.findOne({ id });
    }

    getByUser(idUser: string): Promise<CoinPiggy[]> {
        return this.coinPiggyRepository.find({
            where: { user: idUser }
        })
    }

    delete(id: string) {
        return this.coinPiggyRepository.delete(id);
    }

}