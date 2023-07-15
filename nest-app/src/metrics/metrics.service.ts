import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Metrics, MetricsDocument } from './schemas/metrics.schema';

@Injectable()
export class MetricsService {
    constructor(
        @InjectModel(Metrics.name) private metricsModel: Model<MetricsDocument>,
    ) { }

    async findAll(): Promise<Metrics[]> {
        return this.metricsModel.find().exec();
    }

    async findOne(uuid: string): Promise<Metrics> {
        return this.metricsModel.findOne({ uuid }).exec();
    }

    async create(metrics: Metrics): Promise<Metrics> {
        const newMetrics = new this.metricsModel(metrics);
        return newMetrics.save();
    }

    async update(uuid: string, metrics: Metrics): Promise<any> {
        return await this.metricsModel.updateOne({ uuid }, metrics).exec();
    }

    async remove(uuid: string): Promise<any> {
        return await this.metricsModel.deleteOne({ uuid }).exec();
    }
}
