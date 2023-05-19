import { Module } from '@nestjs/common';
import { MemberModule } from './app/members/member.module';

@Module({
  imports: [MemberModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
