import { Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('credentials')
export class CredentialsController {
    constructor(private credentialsService: CredentialsService) {}

    @Get('id')
    @UseGuards(AuthGuard)
    async findByUser(@Request() req, @Param('id') id: string) {
        return await this.credentialsService.findByUser(parseInt(id), req.user.id);
    }

    @Get()
    @UseGuards(AuthGuard)
    async findAllByUser(@Request() req) {
        return await this.credentialsService.findAllByUser(req.user.id);
    }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Request() req) {
        return await this.credentialsService.create(req.user.id);
    }
    
    @Delete(':id')
    @UseGuards(AuthGuard)
    async delete(@Request() req, @Param('id') id: string) {
        return await this.credentialsService.delete(parseInt(id), req.user.id);
    }
}
