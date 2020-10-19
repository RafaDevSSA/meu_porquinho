import { Injectable } from '@nestjs/common';
import { GoalsRepository } from 'src/repositories/goals.repository';

@Injectable()
export class GetGolsService {

    constructor(private goalsRepository: GoalsRepository) { }
    async execute(idCoinPiggy: string) {
        return await this.goalsRepository.getByCoinPiggy(idCoinPiggy);
    }
}
