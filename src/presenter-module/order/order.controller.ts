import { Controller, Post } from '@nestjs/common';

@Controller('orders')
export class OrderController {
  constructor() {}

  @Post()
  newOrder(): string {
    return 'Hello World!';
  }
}
