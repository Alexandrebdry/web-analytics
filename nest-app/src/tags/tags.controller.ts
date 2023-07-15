import {Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards} from '@nestjs/common';
import {TagsService} from './tags.service';
import {AuthGuard} from 'src/auth/auth.guard';
import {CreateTagDto} from './dto/create-tag.dto';
import {UpdateTagDto} from "./dto/update-tag.dto";
import { SdkGuard } from 'src/credentials/sdk.guard';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Get('')
  @UseGuards(AuthGuard)
  findAll(@Request() req) {
    return this.tagsService.findAllByUser(req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.tagsService.find(+id);
  }

  @Get('comment/:comment')
  @UseGuards(SdkGuard)
  findByComment(@Param('comment') comment: string, @Request() req) {
    return this.tagsService.findByComment(comment);
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() tagDto: CreateTagDto, @Request() req) {
    return this.tagsService.create(req.user.id, tagDto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() tagDto: UpdateTagDto, @Request() req) {
    return this.tagsService.update(+id, tagDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id') id: string) {
    return this.tagsService.delete(+id);
  }
}