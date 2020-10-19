import { Injectable, Inject } from "@nestjs/common";
import { Goals } from "src/entities/goals.entity";
import { Repository } from "typeorm";

@Injectable()
export class GoalsRepository {

    constructor(@Inject('GOALS_REPOSITORY') private goalsRepository: Repository<Goals>) { }

    save(goals: Goals): Promise<Goals> {
        return this.goalsRepository.save(goals);
    }

    getByCoinPiggy(idCoinPiggy: string): Promise<Goals[]> {
        return this.goalsRepository.find({
            where: { coinPiggy: idCoinPiggy }
        })
    }

    delete(id: number) {
        return this.goalsRepository.delete(id);
    }

}