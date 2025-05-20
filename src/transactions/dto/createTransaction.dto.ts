import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({
    example: '123456',
    description: 'Account number',
  })
  @IsString()
  @IsNotEmpty()
  readonly accountNumber: string;

  @ApiProperty({
    example: '500',
    description: 'Amount',
  })
  @IsString()
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty({
    example: 'payment for invoice',
    description: 'Narration',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  readonly narration: string;

  
}
