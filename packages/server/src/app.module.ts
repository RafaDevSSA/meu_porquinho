import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CoinPiggyModule } from './coin-piggy/coin-piggy.module';
import { UserModule } from './user/user.module';

const getMergedTypeormOptions = (): TypeOrmModuleOptions => {
  return {
    type: process.env.TYPEORM_CONNECTION,
    port: process.env.TYPEORM_PORT,
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    logging: process.env.TYPEORM_LOGGING,
    autoLoadEntities: true,
  } as TypeOrmModuleOptions;
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getMergedTypeormOptions()),
    UserModule,
    CoinPiggyModule,
  ],
})
export class AppModule {}
