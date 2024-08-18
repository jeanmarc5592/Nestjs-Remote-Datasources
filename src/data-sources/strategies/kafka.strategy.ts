import { Injectable } from '@nestjs/common';
import { DataSourceStrategy } from './strategy.interface';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaStrategy implements DataSourceStrategy {
  private kafka: Kafka;
  private consumer: any;

  constructor() {
    this.kafka = new Kafka({
      // TODO: Make dynamic (Via method or constructor props)
      clientId: 'my-app',
      // TODO: Make dynamic (Via method or constructor props)
      brokers: ['kafka:9092'],
    });

    // TODO: Make dynamic (via method "setConsumer")
    this.consumer = this.kafka.consumer({ groupId: 'test-group' });
  }

  async fetchData<T>(topic: string): Promise<T[]> {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning: true });

    const messages: T[] = [];
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        messages.push(message.value.toString());
      },
    });

    return messages;
  }
}
