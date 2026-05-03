import { Injectable } from '@nestjs/common';
import { MenuService } from '../../../../domain-module/services/menu.service';
import { GetAllMenuResponseDto } from './get-all-menu.dto';

@Injectable()
export class GetAllMenuUseCase {
  constructor(private readonly menuService: MenuService) {}

  async execute(): Promise<GetAllMenuResponseDto[]> {
    const menus = await this.menuService.getAllMenus();
    return menus.map((menu) => ({
      id: menu.id,
      name: menu.name,
      description: menu.description,
      price: menu.price,
      category: menu.category,
      isAvailable: menu.isAvailable,
    }));
  }
}
