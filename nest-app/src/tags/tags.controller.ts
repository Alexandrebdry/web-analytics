import { Body, Controller, Post, UseGuards, Request, Get, Param } from '@nestjs/common';
import { TagsService } from './tags.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { TagsDto } from './tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Get('')
  @UseGuards(AuthGuard)
  findCompany(@Request() req) {
    return this.tagsService.findCompany(req.user.companyName);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  find(@Param('id') id: number) {
    return this.tagsService.find(id);
  }

  @Post('create')
  @UseGuards(AuthGuard)
  create(@Body() tagDto: TagsDto, @Request() req) {
    tagDto.companyName = req.user.companyName;
    return this.tagsService.create(tagDto);
  }

  @Post('update')
  @UseGuards(AuthGuard)
  update(@Body() tagDto: TagsDto, @Request() req) {
    return this.tagsService.update(tagDto, req.user.companyName);
  }

  @Get('delete/:id')
  @UseGuards(AuthGuard)
  delete(@Param('id') id: string) {
    return this.tagsService.delete(parseInt(id));
  }
}