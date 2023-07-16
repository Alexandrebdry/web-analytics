import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CredentialsService } from './credentials.service';
  
  @Injectable()
  export class SdkGuard implements CanActivate {
    constructor(private usersService: UsersService, private credentialsService: CredentialsService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      
      if (typeof request.body === 'string' || request.body instanceof String) {
        request.body = JSON.parse(request.body);
      }

      try {
        let appID = request.headers['app-id'];
        let appSecret = request.headers['app-secret'];

        if ((!appID || appID === undefined) || (!appSecret || appSecret === undefined)) {
          appID = request.body.appID;
          appSecret = request.body.appSecret;
        }
        
        if (!appID || !appSecret) {
          return false;
        }

        const credentials = await this.credentialsService.findByCredentials(appID, appSecret);

        if (!credentials) {
            return false;
        }

        const user = await this.usersService.find(credentials.userId);

        if (!user) {
            return false;
        }
        
        request['user'] = {
            id: user.id
        };
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  }