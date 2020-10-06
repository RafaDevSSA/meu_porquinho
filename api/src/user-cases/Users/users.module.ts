import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database.module';
import { userProvider } from 'src/providers/users.provider';
import { UtilitarioModule } from 'src/providers/utilitario.module';
import { UserRepository } from 'src/repositories/User.repository';
import { CreateUser } from './CreateUser';
import { UsersController } from './users.controller';


@Module({
    imports:[DatabaseModule,UtilitarioModule],
    controllers: [UsersController],
    providers: [CreateUser, ...userProvider, UserRepository]

})

export class UsersModule { }
