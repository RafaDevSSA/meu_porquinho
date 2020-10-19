import { Injectable } from '@nestjs/common';
import { Goals } from 'src/entities/goals.entity';
import { CoinPiggyRepository } from 'src/repositories/CoinPiggy.repository';
import { GoalsRepository } from 'src/repositories/Goals.repository';
import { GoalDTO } from './IGoalDTO';

@Injectable()
export class CreateGoalService {

    constructor(private goalsRepository: GoalsRepository, private coinPiggyRepository: CoinPiggyRepository){}

    async execute(goalDTO: GoalDTO){
        const data = new Date(goalDTO.date);
        console.log(data);
        const coinPiggy = await this.coinPiggyRepository.getById(goalDTO.coinPiggyId);
        if(coinPiggy){
            goalDTO.coinPiggy = coinPiggy;
            const goal = new Goals(goalDTO);
            return await this.goalsRepository.save(goal)
        }else{
            throw new Error('Porquinho não encontrado.');
        }
    } 
 }
