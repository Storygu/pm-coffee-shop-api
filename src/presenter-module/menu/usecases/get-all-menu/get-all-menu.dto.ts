import { MenuCategory } from '../../../../type/menu.type';

export class GetAllMenuResponseDto {
  id!: number;
  name!: string;
  description?: string;
  price!: number;
  category!: MenuCategory;
  isAvailable!: boolean;
}
