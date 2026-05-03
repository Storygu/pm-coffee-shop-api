import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseDAL } from '../base.dal';
import { MenuDataLayer } from './menu.dl';
import { MenuEntity } from './menu.entity';

@Injectable()
export class MenuDAL extends BaseDAL<MenuEntity, MenuDataLayer> {
  constructor(
    @InjectRepository(MenuEntity)
    repository: Repository<MenuEntity>,
  ) {
    super(repository);
  }

  protected toDataLayer(entity: MenuEntity): MenuDataLayer {
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
