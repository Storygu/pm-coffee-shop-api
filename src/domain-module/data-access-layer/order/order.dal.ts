import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseDAL } from '../base.dal';
import { OrderDataLayer } from './order.dl';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderDAL extends BaseDAL<OrderEntity, OrderDataLayer> {
  constructor(
    @InjectRepository(OrderEntity)
    repository: Repository<OrderEntity>,
  ) {
    super(repository);
  }

  protected toDataLayer(entity: OrderEntity): OrderDataLayer {
    return {
      id: entity.id,
      no: entity.no,
      price: entity.price,
      discount: entity.discount,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
    };
  }
}
