import { MeepoSmsSetProviders } from './src/sms-set/sms-set.provider';
import { MeepoSmsProviders } from './src/sms/sms.provider';
import { MeepoMembersProviders } from './src/members/members.provider';
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
@Module({
  providers: [
    ...databaseProviders,
    ...MeepoMembersProviders,
    ...MeepoSmsProviders,
    ...MeepoSmsSetProviders,
  ],
  exports: [
    ...databaseProviders,
    ...MeepoMembersProviders,
    ...MeepoSmsProviders,
    ...MeepoSmsSetProviders,
  ],
})
export class FrameworkTypeormModule {}
