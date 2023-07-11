import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RolesEnum } from './roles.enum';

@Injectable()
export class RolesService {
  constructor(private usersService: UsersService) {}

  async updateRoles(userId: number, roles: string[]) {
    const user = await this.usersService.find(userId);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (!this.existsRole(roles)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return await this.usersService.update({
        ...user,
        roles: roles
    });
  }

  existsRole(roles: string[]) {
    return roles.every((role) => {
        return Object.values(RolesEnum).includes(role as RolesEnum)
    });
  }
}
