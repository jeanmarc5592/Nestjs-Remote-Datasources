export interface DataSourceStrategy {
  fetchData(endpoint: string, config?: any): Promise<any>;
}
