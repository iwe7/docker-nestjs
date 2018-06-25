import { Connection, Repository } from 'typeorm';
import { MeepoSmsSet } from './sms-set.entity';

export const MeepoSmsSetProviders = [
  {
    provide: 'MeepoSmsSetRepositoryToken',
    useFactory: (connection: Connection) =>
      connection.getRepository(MeepoSmsSet),
    inject: ['DbConnectionToken'],
  },
];
