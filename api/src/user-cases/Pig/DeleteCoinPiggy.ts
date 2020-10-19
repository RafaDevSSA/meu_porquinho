import { Injectable } from '@nestjs/common';
import { CoinPiggyRepository } from 'src/repositories/CoinPiggy.repository';

@Injectable()
export class DeleteCoinPiggyService {

    constructor(private coinPiggyRepository: CoinPiggyRepository) { }

    async execute(id: string) {
        return await this.coinPiggyRepository.delete(id);
    }
}
