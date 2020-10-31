import { CoinPiggyController } from './coin-piggy.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { CreateCoinPiggyMoneyService } from './CoinPiggyMoney/CreateCoinPiggyMoney';
import { CoinPiggyMoneyRepository } from 'src/repositories/CoinPiggyMoney.repository';
import { CoinPiggyMoneyProvider } from 'src/providers/coin-piggy-money.provider';
import { GetCoinPiggyMoneyService } from './CoinPiggyMoney/GetCoinPiggyMoney';
import { HistoryProvider } from 'src/providers/history.provider';
import { HistoryRepository } from 'src/repositories/HistoryRepository';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../Auth/constants';

@Module({
    imports: [
        DatabaseModule,
        UtilitarioModule,
        UsersModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '600s' },
        }),],
    controllers: [
        CoinPiggyController, GoalsController, CoinPiggyMoneyController],
    providers: [...coinPiggyProvider, ...goalsProvider, ...CoinPiggyMoneyProvider, ...HistoryProvider,
        CreateCoinPiggyService,
        GetCoinPiggyByUserService,
        DeleteCoinPiggyService,
        CreateGoalService,
        DeleteGoalService,
        GetGolsService,
        CreateCoinPiggyMoneyService,
        GetCoinPiggyMoneyService,
        CoinPiggyRepository,
        GoalsRepository,
        CoinPiggyMoneyRepository,
        HistoryRepository],
})
export class PigModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('coin-piggy');
    }
}