import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderDAL } from './data-access-layer/order/order.dal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './data-access-layer/order/order.entity';
import { MenuDAL } from './data-access-layer/menu/menu.dal';
import { MenuEntity } from './data-access-layer/menu/menu.entity';
import { MenuService } from './services/menu.service';
import { OrderItemEntity } from './data-access-layer/order-item/order-item.entity';
import { OrderItemDAL } from './data-access-layer/order-item/order-item.dal';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, OrderItemEntity, MenuEntity])],
  providers: [OrderDAL, OrderItemDAL, OrderService, MenuDAL, MenuService],
  exports: [OrderService, MenuService],
})
export class DomainModule {}
