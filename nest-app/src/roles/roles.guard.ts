import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesEnum } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      return false;
    }

    if (user.roles.includes(RolesEnum.ADMIN)) {
      return true;
    }

    return this.matchRoles(roles, user.roles);
  }

  matchRoles(roles: string[], userRoles: string[]): boolean {
    return roles.some(role => userRoles.includes(role));
  }
}