import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { OrderDataLayer } from './order.dl';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderDAL {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
  ) {}

  async find(options?: FindManyOptions<OrderDataLayer>): Promise<OrderDataLayer[]> {
    const entities = await this.repository.find(options as FindManyOptions<OrderEntity>);
    return entities.map((entity) => this.toDataLayer(entity));
  }

  async findOne(options: FindOneOptions<OrderDataLayer>): Promise<OrderDataLayer | null> {
    const entity = await this.repository.findOne(options as FindOneOptions<OrderEntity>);
    return entity ? this.toDataLayer(entity) : null;
  }

  async save(data: Partial<OrderDataLayer>): Promise<OrderDataLayer> {
    const entity = await this.repository.save(data as Partial<OrderEntity>);
    return this.toDataLayer(entity);
  }

  async update(id: number, partial: Partial<OrderDataLayer>): Promise<OrderDataLayer | null> {
    await this.repository.update(id, partial as Partial<OrderEntity>);
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDataLayer(entity) : null;
  }

  async softDelete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return !!result.affected && result.affected > 0;
  }

  private toDataLayer(entity: OrderEntity): OrderDataLayer {
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
