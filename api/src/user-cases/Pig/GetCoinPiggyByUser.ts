import { Injectable } from '@nestjs/common';
import { CoinPiggyRepository } from 'src/repositories/CoinPiggy.repository';

@Injectable()
export class GetCoinPiggyByUserService {

    constructor(private coinPiggyRepository: CoinPiggyRepository) { }
    async execute(idUser: string) {
        return await this.coinPiggyRepository.getByUser(idUser);
    }

    async executeById(id: string){
        return await this.coinPiggyRepository.getById(id);
    }
}
