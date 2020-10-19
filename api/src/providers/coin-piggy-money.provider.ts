import { Connection, Repository } from 'typeorm';
import { CoinPiggyMoney } from '../entities/coin-piggy-money.entity';

export const goalsProvider = [
    {
      provide: 'COIN_PIGGY_MONEY',
      useFactory: (connection: Connection) => connection.getRepository(CoinPiggyMoney),
      inject: ['DATABASE_CONNECTION'],
    },
  ];