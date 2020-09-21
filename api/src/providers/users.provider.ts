import { Connection, Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

export const userProvider = [
    {
      provide: 'USERS_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Users),
      inject: ['DATABASE_CONNECTION'],
    },
  ];