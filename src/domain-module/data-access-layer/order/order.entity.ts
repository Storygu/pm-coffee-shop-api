import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderStatus } from '../../../type/order.type';

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

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}
