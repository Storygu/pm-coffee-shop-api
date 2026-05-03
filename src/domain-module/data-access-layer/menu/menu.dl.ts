import { MenuCategory } from '../../../type/menu.type';

export class MenuDataLayer {
  id!: number;
  name!: string;
  description?: string;
  price!: number; // Price in Stang to avoid floating point issues
  category!: MenuCategory;
  isAvailable!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
}
