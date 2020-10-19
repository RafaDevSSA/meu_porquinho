import { Connection, Repository } from 'typeorm';
import { CoinPiggyMoney } from '../entities/coin-piggy-money.entity';

export const CoinPiggyMoneyProvider = [
    {
      provide: 'COIN_PIGGY_MONEY_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(CoinPiggyMoney),
      inject: ['DATABASE_CONNECTION'],
    },
  ];