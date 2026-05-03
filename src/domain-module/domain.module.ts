import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './data-access-layer/order/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
  ],
})
export class AppModule {}
