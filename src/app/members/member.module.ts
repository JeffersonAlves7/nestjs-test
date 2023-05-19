import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { PrismaSevice } from 'src/database/prisma.service';

@Module({
  imports: [],
  controllers: [MemberController],
  providers: [PrismaSevice],
})
export class MemberModule {}
