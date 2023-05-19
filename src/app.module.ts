import { Module } from '@nestjs/common';
import { MemberModule } from './members/member.module';

@Module({
  imports: [MemberModule],
})
export class AppModule {}
