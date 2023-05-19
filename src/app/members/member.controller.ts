import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaSevice } from 'src/database/prisma.service';
import { MemberBodyDTO } from './member-body-dto';
import { MemberResponseDTO } from './member-response-dto';
import { Member } from '@prisma/client';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('member')
@Controller('member')
export class MemberController {
  constructor(private readonly prismaService: PrismaSevice) {}

  @ApiOperation({ summary: 'Get all members' })
  @Get('all')
  async getAllMembers(): Promise<MemberResponseDTO[]> {
    const members: Member[] = await this.prismaService.member.findMany();
    const membersToReponse: MemberResponseDTO[] = members.map(
      (member) => new MemberResponseDTO(member),
    );
    return membersToReponse;
  }

  @ApiOperation({ summary: 'Create a new member' })
  @ApiBody({
    type: MemberBodyDTO,
  })
  @ApiResponse({ status: 201, type: MemberResponseDTO })
  @Post()
  async createMember(@Body() body: MemberBodyDTO) {
    const member: Member = await this.prismaService.member.create({
      data: body,
    });
    const memberResponse: MemberResponseDTO = new MemberResponseDTO(member);
    return memberResponse;
  }
}
