import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSourcesService } from '../data-sources.service';
import { ExternalDataSource } from './external-data-source.interface';
import { DataSourcesTypes } from '../data-sources.types';

@Injectable()
export class TransportDataSource implements ExternalDataSource {
  apiType = 'REST' as DataSourcesTypes;
  endpoint = 'https://api.mockapi.com/api/transport';
  config = {
    headers: { 'x-api-key': '44ff37453bef470fbb4875d95d6a0708' },
  };

  constructor(private readonly dataSourcesService: DataSourcesService) {}

  async getData() {
    try {
      return this.dataSourcesService.getData(
        this.apiType,
        this.endpoint,
        this.config,
      );
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException();
    }
  }
}
