import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database.module';
import { userProvider } from 'src/providers/users.provider';
import { UtilitarioModule } from 'src/providers/utilitario.module';
import { UserRepository } from 'src/repositories/User.repository';
import { AuthModule } from '../Auth/auth.module';
import { CreateUser } from './CreateUser';
import { DeleteUserService } from './DeleteUser';
import { Login } from './Login';
import { UsersController } from './users.controller';


@Module({
    imports: [
        DatabaseModule,
        UtilitarioModule,
        forwardRef(() => AuthModule),],
    controllers: [UsersController],
    providers: [CreateUser, DeleteUserService, Login, ...userProvider, UserRepository],
    exports: [UserRepository]

})

export class UsersModule { }
