import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { RolesEnum } from './roles.enum';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post('update')
  @Roles(RolesEnum.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  update(@Body() body) {
    return this.rolesService.updateRoles(body.userId, body.roles);
  }
}
