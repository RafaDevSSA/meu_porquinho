import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database.module';
import { databaseProviders } from 'src/providers/database.providers';
import { userProvider } from 'src/providers/users.provider';
import { UserRepository } from 'src/repositories/User.repository';
import { CreateUser } from './CreateUser';
import { UsersController } from './users.controller';


@Module({
    imports:[DatabaseModule],
    controllers: [UsersController],
    providers: [CreateUser, ...userProvider, UserRepository]

})

export class UsersModule { }
