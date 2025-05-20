import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Users } from 'src/users/entity/user.entity';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService,
      ) {}
    
      @ApiOperation({ summary: 'Login', description: 'Generates a jwt token' })
      @Post('login')
      login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
      }
    
      @ApiBearerAuth()
      @UseGuards(AuthGuard)
      @Get('me')
      getMe(@Req() req: Request) {
        return req.user as Users;
      }
    
      @Post('refresh')
      async refresh(@Body() refreshTokenDto: RefreshTokenDto) {
        return this.authService.validateRefreshToken(refreshTokenDto.refreshToken);
      }
}
