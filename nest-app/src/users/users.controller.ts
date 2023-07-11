import { Body, Controller, Post, UseGuards, Request, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Roles } from '../roles/roles.decorator';
import { RolesEnum } from '../roles/roles.enum';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('validate/:id')
  @Roles(RolesEnum.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  async validate(@Param('id') id: string) {
    return this.usersService.validate(parseInt(id));
  }

  @Post('update')
  @UseGuards(AuthGuard)
  update(@Body() userDto: Record<string, any>, @Request() req) {
    const user = req.user;

    if (!user) {
      return null;
    }

    Object.keys(userDto).forEach(key => {
      if (!['id', 'password', 'roles', 'isVerified'].includes(key)) {
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