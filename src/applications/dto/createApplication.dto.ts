import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty({
    example: '123456',
    description: 'bankId',
  })
  @IsNumber()
  @IsNotEmpty()
  readonly bankId: number;

  @ApiProperty({
    example: '1223',
    description: 'brnachId',
  })
  @IsString()
  @IsNotEmpty()
  readonly branchId: number;

  @ApiProperty({
    example: 'abebe',
    description: 'Account name',
  })
  @IsString()
  @IsNotEmpty()
  
  readonly accountName: string;

  @ApiProperty({
    example: 'Status',
    description: 'Submitted',
  })
  @IsString()
  @IsNotEmpty()
  readonly status: string;


  
}
