import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MemberBodyDTO {
  @ApiProperty({
    description: 'Member name',
    minLength: 3,
    maxLength: 20,
  })
  @IsNotEmpty()
  @Length(3, 20)
  name: string;
}
