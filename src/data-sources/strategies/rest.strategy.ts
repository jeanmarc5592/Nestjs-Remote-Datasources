import { DataSourceStrategy } from './strategy.interface';
import axios, { AxiosRequestConfig } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RestStrategy implements DataSourceStrategy {
  async fetchData<T>(endpoint: string, params: AxiosRequestConfig): Promise<T> {
    const response = await axios.get<T>(endpoint, params);
    return response.data;
  }
}
