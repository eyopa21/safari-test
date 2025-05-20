import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'Email',
  })

  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'password',
    description: 'User password',
    format: 'password',
  })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character',
    },
  )
  @MinLength(8)
  readonly password: string;
}
