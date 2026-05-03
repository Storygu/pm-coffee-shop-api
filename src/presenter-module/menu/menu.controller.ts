import { Controller, Get } from '@nestjs/common';
import { GetAllMenuUseCase } from './usecases/get-all-menu/get-all-menu.usecase';
import { GetAllMenuResponseDto } from './usecases/get-all-menu/get-all-menu.dto';

@Controller('menus')
export class MenuController {
  constructor(private readonly getAllMenus: GetAllMenuUseCase) {}

  @Get()
  findAll(): Promise<GetAllMenuResponseDto[]> {
    return this.getAllMenus.execute();
  }
}
