import { Controller, Get } from '@nestjs/common';
import { GetAllMenuUseCase } from './usecases/get-all-menu/get-all-menu.usecase';

@Controller()
export class MenuController {
  constructor(private readonly getAllMenus: GetAllMenuUseCase) {}

  @Get()
  getHello(): string {
    return this.getAllMenus.execute();
  }
}
