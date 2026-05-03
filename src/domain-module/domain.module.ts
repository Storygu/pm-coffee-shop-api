import { Module } from '@nestjs/common';
import { OrderDALModule } from './data-access-layer/order';
import { OrderService } from './services/order.service';

@Module({
  imports: [OrderDALModule],
  providers: [OrderService],
  exports: [OrderService],
})
export class DomainModule {}
