import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Connection, ConnectionDocument } from './schemas/connection.schema';
import { Model } from 'mongoose';

@Injectable()
export class ConnectionService {
    constructor(
        @InjectModel(Connection.name)
        private connectionModel: Model<ConnectionDocument>
    ) { }

    async create(createConnectionDto: Connection): Promise<Connection> {
        const createdConnection = new this.connectionModel(createConnectionDto);
        // console.log(createdConnection);
        return createdConnection.save();
    }

    async findAll(): Promise<Connection[]> {
        const connections = await this.connectionModel.find().exec();
        return connections;
    }

    async findOne(id: string): Promise<Connection> {
        const connection = await this.connectionModel.findById(id).exec();
        return connection;
    }

    async delete(id: string): Promise<Connection> {
        const connection = await this.connectionModel.findByIdAndDelete(id).exec();
        return connection;
    }

    async deleteOldConnections(): Promise<any> {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 3);

        const result = await this.connectionModel.deleteMany({ date: { $lt: oneYearAgo } }).exec();
        return result;
    }

    async deleteAll(): Promise<any> {
        const result = await this.connectionModel.deleteMany({}).exec();
        return result;
    }

    formatConnectionData(connections: any[]) {
        const groupedData = connections.reduce((acc, current) => {
            // si la date existe déjà dans l'accumulateur, augmenter le compteur
            if (acc[current.date]) {
                acc[current.date].connections += 1;
            } else {
                // sinon, ajouter une nouvelle entrée avec un compteur initialisé à 1
                acc[current.date] = { date: current.date, connections: 1 };
            }
            return acc;
        }, {});
        const formattedData = Object.values(groupedData);
        formattedData.sort((a: Connection, b: Connection) => {
            const dateA = new Date(a.date.split('-').reverse().join('-'));
            const dateB = new Date(b.date.split('-').reverse().join('-'));
            return dateA.getTime() - dateB.getTime();   // returns a negative value if dateA is before dateB, a positive value if dateA is after dateB, or 0 if they are the same
        });

        return formattedData;
    }
}
