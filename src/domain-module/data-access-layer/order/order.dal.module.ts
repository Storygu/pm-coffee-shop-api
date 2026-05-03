import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDAL } from './order.dal';
import { OrderEntity } from './order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderDAL],
  exports: [OrderDAL],
})
export class OrderDALModule {}
