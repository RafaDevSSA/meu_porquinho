import { Injectable } from '@nestjs/common';
import { CoinPiggy } from 'src/entities/coin-piggy.entity';
import { CoinPiggyRepository } from 'src/repositories/CoinPiggy.repository';
import { UserRepository } from 'src/repositories/User.repository';

@Injectable()
export class CreateCoinPiggyMoneyService {

    constructor(private coinPiggyRepository: CoinPiggyRepository, private userRepository: UserRepository) { }

    async execute(coinPiggyDTO: PigDTO) {
        const user = await this.userRepository.findById(coinPiggyDTO.idUser);
        if (user) {
            coinPiggyDTO.user = user;
            const coinPiggy = new CoinPiggy(coinPiggyDTO)
            return await this.coinPiggyRepository.save(coinPiggy);
        } else {
            throw new Error(`Usuário não existe!`);
        }
    }
}
