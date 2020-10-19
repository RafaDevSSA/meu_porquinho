import { CoinPiggyController } from './coin-piggy.controller';
import { Module } from '@nestjs/common';
import { coinPiggyProvider } from 'src/providers/coin-piggy.provider';
import { DatabaseModule } from 'src/providers/database.module';
import { UtilitarioModule } from 'src/providers/utilitario.module';
import { CreateCoinPiggyService } from './CreateCoinPiggy';
import { UsersModule } from '../Users/users.module';
import { CoinPiggyRepository } from 'src/repositories/CoinPiggy.repository';
import { GetCoinPiggyByUserService } from './GetCoinPiggyByUser';
import { DeleteCoinPiggyService } from './deleteCoinPiggy';
import { GoalsController } from './Goals/goals.controller';
import { goalsProvider } from 'src/providers/goals.provider';
import { CreateGoalService } from './Goals/CreateGoal';
import { GoalsRepository } from 'src/repositories/Goals.repository';
import { DeleteGoalService } from './Goals/DeleteGoal';
import { GetGolsService } from './Goals/GetGoals';
import { CoinPiggyMoneyController } from './CoinPiggyMoney/coin-piggy-money.controller';

@Module({
    imports: [
        DatabaseModule,
        UtilitarioModule,
        UsersModule],
    controllers: [
        CoinPiggyController, GoalsController, CoinPiggyMoneyController],
    providers: [...coinPiggyProvider,...goalsProvider,
        CreateCoinPiggyService,
        GetCoinPiggyByUserService,
        DeleteCoinPiggyService,
        CreateGoalService,
        DeleteGoalService,
        GetGolsService,
        CoinPiggyRepository,
        GoalsRepository],
})
export class PigModule { }
