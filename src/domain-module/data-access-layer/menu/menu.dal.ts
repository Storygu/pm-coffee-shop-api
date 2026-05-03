import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { MenuDataLayer } from './menu.dl';
import { MenuEntity } from './menu.entity';

@Injectable()
export class MenuDAL {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly repository: Repository<MenuEntity>,
  ) {}

  async find(options?: FindManyOptions<MenuDataLayer>): Promise<MenuDataLayer[]> {
    const entities = await this.repository.find(options as FindManyOptions<MenuEntity>);
    return entities.map((entity) => this.toDataLayer(entity));
  }

  async findOne(options: FindOneOptions<MenuDataLayer>): Promise<MenuDataLayer | null> {
    const entity = await this.repository.findOne(options as FindOneOptions<MenuEntity>);
    return entity ? this.toDataLayer(entity) : null;
  }

  async save(data: Partial<MenuDataLayer>): Promise<MenuDataLayer> {
    const entity = await this.repository.save(data as Partial<MenuEntity>);
    return this.toDataLayer(entity);
  }

  async update(id: number, partial: Partial<MenuDataLayer>): Promise<MenuDataLayer | null> {
    await this.repository.update(id, partial as Partial<MenuEntity>);
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDataLayer(entity) : null;
  }

  async softDelete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return !!result.affected && result.affected > 0;
  }

  private toDataLayer(entity: MenuEntity): MenuDataLayer {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      price: entity.price,
      category: entity.category,
      isAvailable: entity.isAvailable,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
    };
  }
}
