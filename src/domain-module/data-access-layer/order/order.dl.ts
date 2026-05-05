import { OrderStatus } from "../../../type/order.type";
import { OrderItemDataLayer } from "../order-item/order-item.dl";

export class OrderDataLayer {
  id!: number;
  no!: string;
  price!: number; // Price in Stang to avoid floating point issues
  discount!: number; // Price in Stang to avoid floating point issues
  status!: OrderStatus;
  orderItems!: OrderItemDataLayer[];
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
}
