import { Injectable } from '@nestjs/common';
import { DataSourceStrategy } from './strategies/strategy.interface';

@Injectable()
export class DataSourcesContext {
  private strategy: DataSourceStrategy;

  setStrategy(strategy: DataSourceStrategy) {
    this.strategy = strategy;
  }

  async fetchData(endpoint: string, config?: any): Promise<any> {
    return this.strategy.fetchData(endpoint, config);
  }
}
