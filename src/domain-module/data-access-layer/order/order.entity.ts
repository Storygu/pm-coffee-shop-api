import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderStatus } from '../../../type/order.type';
import { OrderItemEntity } from '../order-item/order-item.entity';

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'no', length: 50 })
  no!: string;

  @Column({ name: 'price', type: 'int' })
  price!: number; // Price in Stang to avoid floating point issues

  @Column({ name: 'discount', type: 'int' })
  discount!: number; // Price in Stang to avoid floating point issues

  @Column({ name: 'status', enum: OrderStatus, type: 'enum' })
  status!: OrderStatus;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order, {
    eager: true,
  })
  orderItems!: OrderItemEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}
