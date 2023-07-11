import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post('update')
  @UseGuards(AuthGuard)
  update(@Body() body) {
    return this.rolesService.updateRoles(body.userId, body.roles);
  }
}
