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

  async softDelete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }

  private toDataLayer(entity: OrderEntity): OrderDataLayer {
    const dl = new OrderDataLayer();
    dl.id = entity.id;
    dl.no = entity.no;
    dl.price = entity.price;
    dl.discount = entity.discount;
    dl.status = entity.status;
    dl.createdAt = entity.createdAt;
    dl.updatedAt = entity.updatedAt;
    dl.deletedAt = entity.deletedAt;
    return dl;
  }
}
