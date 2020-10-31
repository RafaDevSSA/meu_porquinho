import { Controller, Post, Res, Request, Delete, Get, UseGuards } from '@nestjs/common';
import { Response, Request as req } from 'express';
import { JwtAuthGuard } from 'src/user-cases/Auth/jwt-auth.guard';
import { GoalView } from 'src/views/Goal.view';
import { CreateGoalService } from './CreateGoal';
import { DeleteGoalService } from './DeleteGoal';
import { GetGolsService } from './GetGoals';

@Controller('coin-piggy/goals')
export class GoalsController {

    constructor(
        private createGoal: CreateGoalService,
        private deleteGoalService: DeleteGoalService,
        private getGoals: GetGolsService
    ) { }
    
    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() data: req, @Res() response: Response) {
        try {
            const goal = await this.createGoal.execute(data.body);
            return response.status(201).json(GoalView.returnView(goal));
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:idCoinPiggy')
    async get(@Request() data: req, @Res() response: Response) {
        const goals = await this.getGoals.execute(data.params.idCoinPiggy);
        return response.json(goals);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    async delete(@Request() data: req, @Res() response: Response) {
        try {
            await this.deleteGoalService.execute(parseInt(data.params.id));
            return response.send('Meta Removida');
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }


}
