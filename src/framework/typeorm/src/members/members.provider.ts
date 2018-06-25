import { Connection, Repository } from 'typeorm';
import { MeepoMembers } from './members.entity';

export const MeepoMembersProviders = [
  {
    provide: 'MeepoMembersRepositoryToken',
    useFactory: (connection: Connection) =>
      connection.getRepository(MeepoMembers),
    inject: ['DbConnectionToken'],
  },
];
