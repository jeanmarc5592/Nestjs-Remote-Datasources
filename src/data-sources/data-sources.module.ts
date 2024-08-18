import { Module } from '@nestjs/common';
import { DataSourcesContext } from './data-sources.context';
import { RestStrategy } from './strategies/rest.strategy';
import { SoapStrategy } from './strategies/soap.strategy';
import { KafkaStrategy } from './strategies/kafka.strategy';
import { DataSourcesService } from './data-sources.service';
import { TransportDataSource } from './external/transport.data-source';

@Module({
  providers: [
    DataSourcesContext,
    RestStrategy,
    SoapStrategy,
    KafkaStrategy,
    DataSourcesService,
    TransportDataSource,
  ],
  exports: [DataSourcesService, TransportDataSource],
})
export class DataSourcesModule {}
