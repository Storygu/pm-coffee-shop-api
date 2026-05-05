import { Module } from '@nestjs/common';
import { MenuController } from './menu/menu.controller';
import { DomainModule } from '../domain-module/domain.module';
import { GetAllMenuUseCase } from './menu/usecases/get-all-menu/get-all-menu.usecase';
import { OrderController } from './order/order.controller';

@Module({
  imports: [DomainModule],
  providers: [GetAllMenuUseCase],
  controllers: [MenuController, OrderController],
})
export class PresenterModule {}
