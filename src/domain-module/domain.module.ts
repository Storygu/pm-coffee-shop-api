import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderDAL } from './data-access-layer/order/order.dal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './data-access-layer/order/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderDAL, OrderService],
  exports: [OrderService],
})
export class DomainModule {}
