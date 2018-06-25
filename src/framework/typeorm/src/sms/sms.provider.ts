import { Connection, Repository } from 'typeorm';
import { MeepoSms } from './sms.entity';

export const MeepoSmsProviders = [
  {
    provide: 'MeepoSmsRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(MeepoSms),
    inject: ['DbConnectionToken'],
  },
];
