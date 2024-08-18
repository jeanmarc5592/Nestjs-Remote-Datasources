import { Injectable } from '@nestjs/common';
import { TransportDataSource } from './data-sources/external/transport.data-source';

@Injectable()
export class AppService {
  constructor(private readonly transportDataSource: TransportDataSource) {}

  async addPrice() {
    const transportData = await this.transportDataSource.getData();
    console.log(transportData);

    return 'PRICE';
  }
}
