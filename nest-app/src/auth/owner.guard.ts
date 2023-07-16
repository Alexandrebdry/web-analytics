// import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { Reflector } from '@nestjs/core';
// import {RolesEnum} from "../roles/roles.enum";
// import {PrismaService} from "nestjs-prisma";
//
// @Injectable()
// export class OwnerGuard implements CanActivate {
//   constructor(
//       private reflector: Reflector,
//       private prisma: PrismaService,
//   ) {}
//
//   canActivate(
//       context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const user = request.user;
//     const elementId = request.params.id;
//
//     console.log('OwnerGuard: ', user, elementId);
//
//     if (user.roles.includes(RolesEnum.ADMIN)) {
//       return true;
//     }
//
//     return this.checkOwnership(user.id, reportId);
//   }
//
//   async checkOwnership(userId: string, reportId: string): Promise<boolean> {
//     const report = await this.prisma.report.findUnique({
//       where: { id: reportId },
//     });
//
//     if (!report) {
//       throw new UnauthorizedException();
//     }
//
//     if (report.userId === userId) {
//       return true;
//     }
//
//     throw new UnauthorizedException();
//   }
// }
