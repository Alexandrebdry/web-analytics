import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Metrics, MetricsSchema } from './schemas/metrics.schema';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Metrics.name, schema: MetricsSchema }])],
  providers: [MetricsService],
  controllers: [MetricsController],
})
export class MetricsModule { }
