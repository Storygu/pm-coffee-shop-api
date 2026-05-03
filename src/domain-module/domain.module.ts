import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderDAL } from './data-access-layer/order/order.dal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './data-access-layer/order/order.entity';
import { MenuDAL } from './data-access-layer/menu/menu.dal';
import { MenuEntity } from './data-access-layer/menu/menu.entity';
import { MenuService } from './services/menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, MenuEntity])],
  providers: [OrderDAL, OrderService, MenuDAL, MenuService],
  exports: [OrderService, MenuService],
})
export class DomainModule {}
