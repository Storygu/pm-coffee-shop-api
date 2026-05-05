import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseDAL } from '../base.dal';
import { OrderItemDataLayer } from './order-item.dl';
import { OrderItemEntity } from './order-item.entity';

@Injectable()
export class OrderItemDAL extends BaseDAL<OrderItemEntity, OrderItemDataLayer> {
  constructor(
    @InjectRepository(OrderItemEntity)
    repository: Repository<OrderItemEntity>,
  ) {
    super(repository);
  }

  protected toDataLayer(entity: OrderItemEntity): OrderItemDataLayer {
    return {
      id: entity.id,
      orderId: entity.orderId,
      name: entity.name,
      price: entity.price,
      quantity: entity.quantity,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
    };
  }
}
