import { Injectable } from '@nestjs/common';
import { GoalsRepository } from 'src/repositories/Goals.repository';

@Injectable()
export class DeleteGoalService {

    constructor(private goalsRepository: GoalsRepository) { }

    async execute(id: number) {
        return await this.goalsRepository.delete(id);
    }
}
