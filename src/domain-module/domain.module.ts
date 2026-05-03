import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDAL } from './data-access-layer/order/order.dal';
import { OrderEntity } from './data-access-layer/order/order.entity';
import { OrderService } from './services/order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderDAL, OrderService],
  exports: [OrderService],
})
export class DomainModule {}
