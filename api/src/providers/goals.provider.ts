import { Connection, Repository } from 'typeorm';
import { Goals } from '../entities/goals.entity';

export const goalsProvider = [
    {
      provide: 'GOALS_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Goals),
      inject: ['DATABASE_CONNECTION'],
    },
  ];