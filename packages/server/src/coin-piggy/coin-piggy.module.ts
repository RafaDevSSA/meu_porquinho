import { Module } from '@nestjs/common';
import { CoinPiggyController } from './coin-piggy/coin-piggy.controller';
import { CoinPiggyService } from './coin-piggy/coin-piggy.service';
import { DatabaseModule } from 'src/database/database.module';
import { CoinPiggyProvider } from './coin-piggy/coin-piggy.provider';

@Module({
  controllers: [CoinPiggyController],
  imports: [DatabaseModule],
  providers: [...CoinPiggyProvider, CoinPiggyService]
})
export class CoinPiggyModule { }
