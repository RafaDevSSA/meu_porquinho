import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CoinPiggy } from './coin-piggy.entity';

@Injectable()
export class CoinPiggyService {

    constructor(
        @Inject('COIN_REPOSITORY')
        private coinRepository: Repository<CoinPiggy>
    ) { }

    async save(coinPiggy: CoinPiggy): Promise<CoinPiggy> {
        return this.coinRepository.save(coinPiggy);
    }

    async getByUserId(userId: number): Promise<CoinPiggy[]> {
        return this.coinRepository.find({ where: { 'user_id': userId } });
    }

    async edit(coinPiggy: CoinPiggy): Promise<any> {
        const obj = await this.coinRepository.findOne(coinPiggy.id);
        obj.name = coinPiggy.name;
        return this.coinRepository.save(obj);
    }

    async delete(id): Promise<any> {
        return this.coinRepository.delete(id);
    }
}
