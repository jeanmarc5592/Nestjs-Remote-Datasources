import { Injectable } from '@nestjs/common';
import { DataSourcesContext } from './data-sources.context';
import { RestStrategy } from './strategies/rest.strategy';
import { SoapStrategy } from './strategies/soap.strategy';
import { KafkaStrategy } from './strategies/kafka.strategy';
import { DataSourcesTypes } from './data-sources.types';

@Injectable()
export class DataSourcesService {
  constructor(
    private readonly dataSourcesContext: DataSourcesContext,
    private readonly restStrategy: RestStrategy,
    private readonly soapStrategy: SoapStrategy,
    private readonly kafkaStrategy: KafkaStrategy,
  ) {}

  async getData(
    apiType: DataSourcesTypes,
    endpoint: string,
    config?: any,
  ): Promise<any> {
    switch (apiType) {
      case 'REST':
        this.dataSourcesContext.setStrategy(this.restStrategy);
        break;
      case 'SOAP':
        this.dataSourcesContext.setStrategy(this.soapStrategy);
        break;
      case 'KAFKA':
        this.dataSourcesContext.setStrategy(this.kafkaStrategy);
        break;
      default:
        throw new Error('Unknown API type');
    }

    return this.dataSourcesContext.fetchData(endpoint, config);
  }
}
