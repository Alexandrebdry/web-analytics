import { Body, Controller, Post, UseGuards, Request, Get, Param, Put, Delete } from '@nestjs/common';
import { ConversionFunnelsService } from './conversion.funnels.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ConversionFunnelsDto } from './conversion.funnels.dto';

@Controller('conversion_funnels')
export class ConversionFunnelsController {
  constructor(private conversionFunnelsService: ConversionFunnelsService) {}

  @Get('')
  @UseGuards(AuthGuard)
  findAll(@Request() req) {
    return this.conversionFunnelsService.findAll(req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string, @Request() req) {
    return this.conversionFunnelsService.find(+id);
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() conversionFunnelDto: ConversionFunnelsDto, @Request() req) {
    return this.conversionFunnelsService.create(req.user.id, conversionFunnelDto);
  }

  @Put()
  @UseGuards(AuthGuard)
  update(@Body() conversionFunnelDto: ConversionFunnelsDto, @Request() req) {
    return this.conversionFunnelsService.update(conversionFunnelDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id') id: string) {
    return this.conversionFunnelsService.delete(parseInt(id));
  }
}