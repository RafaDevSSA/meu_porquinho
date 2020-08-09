import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { CoinPiggyModule } from './coin-piggy/coin-piggy.module';
@Module({
  imports: [UserModule, DatabaseModule, CoinPiggyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
