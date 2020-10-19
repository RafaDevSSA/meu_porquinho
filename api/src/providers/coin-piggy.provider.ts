import { Connection, Repository } from 'typeorm';
import { CoinPiggy } from '../entities/coin-piggy.entity';

export const coinPiggyProvider = [
    {
      provide: 'COIN_PIGGY_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(CoinPiggy),
      inject: ['DATABASE_CONNECTION'],
    },
  ];