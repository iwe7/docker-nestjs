import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'mariadb',
        host: '192.168.1.108',
        port: 3306,
        username: 'root',
        password: 'yang1989.',
        database: 'meepo',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
