import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MenuCategory } from '../../../type/menu.type';

@Entity({ name: 'menus' })
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'name', length: 150 })
  name!: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description?: string;

  @Column({ name: 'price', type: 'int' })
  price!: number; // Price in Stang to avoid floating point issues

  @Column({ name: 'category', enum: MenuCategory, type: 'enum' })
  category!: MenuCategory;

  @Column({ name: 'is_available', type: 'boolean', default: true })
  isAvailable!: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}
