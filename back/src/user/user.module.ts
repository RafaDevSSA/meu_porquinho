import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userProvider } from './user.provider';
import { UserService } from './user.service';


import { DatabaseModule } from '../database/database.module';

@Module({
    controllers: [UserController],
    imports: [DatabaseModule],
    providers: [...userProvider, UserService],
})
export class UserModule { }
