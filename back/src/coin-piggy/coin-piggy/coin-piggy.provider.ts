
import { Connection, Repository } from 'typeorm';
import { CoinPiggy } from './coin-piggy.entity';

export const CoinPiggyProvider = [
    {
        provide: 'COIN_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(CoinPiggy),
        inject: ['DATABASE_CONNECTION']
    }
]