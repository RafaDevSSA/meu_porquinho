import { forwardRef, Module } from '@nestjs/common';
import { AuthProvider } from '../../providers/auth.provider';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../Users/users.module';

@Module({
    imports: [
        PassportModule,
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [],
    providers: [
        AuthProvider, JwtStrategy],
    exports: [AuthProvider]
})
export class AuthModule { }
