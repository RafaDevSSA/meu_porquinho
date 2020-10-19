
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user-cases/Users/users.module';
import { PigModule } from './user-cases/Pig/coin-piggy.module';
import { AuthModule } from './user-cases/Auth/auth.module';

@Module({
  imports: [
    PigModule,
    AuthModule, UsersModule],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule{}

