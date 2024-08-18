import { Injectable } from '@nestjs/common';
import { DataSourceStrategy } from './strategy.interface';
import * as soap from 'soap';

@Injectable()
export class SoapStrategy implements DataSourceStrategy {
  async fetchData<T>(endpoint: string, config?: any): Promise<T> {
    const client = await soap.createClientAsync(endpoint);
    return client.GetData(config) as T;
  }
}