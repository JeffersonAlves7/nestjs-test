import { ApiProperty } from '@nestjs/swagger';
import { Member } from '@prisma/client';
import { IsNotEmpty, Length, Min } from 'class-validator';

export class MemberResponseDTO {
  @ApiProperty({
    description: 'Member id',
    minimum: 1,
  })
  @IsNotEmpty()
  @Min(1)
  id: number;

  @ApiProperty({
    description: 'Member name',
    minLength: 3,
    maxLength: 20,
  })
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  constructor(member: Member) {
    this.id = member.id;
    this.name = member.name;
  }
}
