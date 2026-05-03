import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDAL } from './data-access-layer/order/order.dal';
import { OrderEntity } from './data-access-layer/order/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderDAL],
  exports: [OrderDAL],
})
export class DomainModule {}
