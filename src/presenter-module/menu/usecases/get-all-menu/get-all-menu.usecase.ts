import { Injectable } from '@nestjs/common';
import { MenuService } from '../../../../domain-module/services/menu.service';

@Injectable()
export class GetAllMenuUseCase {
  constructor (private readonly menuService: MenuService) {}
  execute(): string {
    throw new Error('Method not implemented.');
  }
}
