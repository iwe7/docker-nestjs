import { MeepoMembers } from './framework/typeorm/src/members/members.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
@Injectable()
export class AppService {
  constructor(
    @Inject('MeepoMembersRepositoryToken')
    private readonly memberRepository: Repository<MeepoMembers>,
  ) { }
  root(): any {
    return 'welcome';
  }
}
