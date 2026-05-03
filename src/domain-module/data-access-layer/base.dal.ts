import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  ObjectLiteral,
  Repository,
} from 'typeorm';

export abstract class BaseDAL<TEntity extends ObjectLiteral, TDataLayer> {
  constructor(protected readonly repository: Repository<TEntity>) {}

  async find(options?: FindManyOptions<TDataLayer>): Promise<TDataLayer[]> {
    const entities = await this.repository.find(options as FindManyOptions<TEntity>);
    return entities.map((entity) => this.toDataLayer(entity));
  }

  async findOne(options: FindOneOptions<TDataLayer>): Promise<TDataLayer | null> {
    const entity = await this.repository.findOne(options as FindOneOptions<TEntity>);
    return entity ? this.toDataLayer(entity) : null;
  }

  async save(data: Partial<TDataLayer>): Promise<TDataLayer> {
    const entity = await this.repository.save(data as DeepPartial<TEntity>);
    return this.toDataLayer(entity as unknown as TEntity);
  }

  async update(id: number, partial: Partial<TDataLayer>): Promise<TDataLayer | null> {
    await this.repository.update(id, partial as Partial<TEntity>);
    const entity = await this.repository.findOne({
      where: { id },
    } as unknown as FindOneOptions<TEntity>);
    return entity ? this.toDataLayer(entity) : null;
  }

  async softDelete(id: number): Promise<boolean> {
    const result = await this.repository.softDelete(id);
    return !!result.affected && result.affected > 0;
  }

  protected abstract toDataLayer(entity: TEntity): TDataLayer;
}
