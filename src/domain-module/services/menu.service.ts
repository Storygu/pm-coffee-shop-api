import { Injectable } from '@nestjs/common';
import { MenuDAL } from '../data-access-layer/menu/menu.dal';
import { MenuDataLayer } from '../data-access-layer/menu/menu.dl';

@Injectable()
export class MenuService {
  constructor(private readonly menuDAL: MenuDAL) {}

  getAllMenus(): Promise<MenuDataLayer[]> {
    return this.menuDAL.find();
  }
}
