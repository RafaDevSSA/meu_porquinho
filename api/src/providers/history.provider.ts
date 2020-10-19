import { Connection, Repository } from 'typeorm';
import { History } from '../entities/history.entity';

export const HistoryProvider = [
    {
      provide: 'HISTORY_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(History),
      inject: ['DATABASE_CONNECTION'],
    },
  ];