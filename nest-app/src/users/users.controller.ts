import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('update')
  @UseGuards(AuthGuard)
  update(@Body() userDto: Record<string, any>, @Request() req) {
    const user = req.user;

    if (!user) {
      return null;
    }

    Object.keys(userDto).forEach(key => {
      if (key !== 'password') {
        user[key] = userDto[key];
      }
    });

    return this.usersService.update(user);
  }

  @Post('update/password')
  @UseGuards(AuthGuard)
  updatePassword(@Body() userDto: Record<string, any>, @Request() req) {
    const user = req.user;

    if (!user) {
      return null;
    }

    return this.usersService.updatePassword(user, userDto.password);
  }
}