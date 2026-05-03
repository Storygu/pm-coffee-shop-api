import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderDAL {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
  ) {}

  find(options?: FindManyOptions<OrderEntity>): Promise<OrderEntity[]> {
    return this.repository.find(options);
  }

  findOne(options: FindOneOptions<OrderEntity>): Promise<OrderEntity | null> {
    return this.repository.findOne(options);
  }

  save(entity: Partial<OrderEntity>): Promise<OrderEntity> {
    return this.repository.save(entity);
  }

  async update(id: number, partial: Partial<OrderEntity>): Promise<OrderEntity | null> {
    await this.repository.update(id, partial);
    return this.repository.findOne({ where: { id } });
  }

  async softDelete(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }
}
