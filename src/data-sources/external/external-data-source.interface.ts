import { DataSourcesTypes } from '../data-sources.types';

export interface ExternalDataSource {
  apiType: DataSourcesTypes;
  endpoint: string;
  config?: any;
}
