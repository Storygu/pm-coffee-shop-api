import { OrderStatus } from "../../../type/order.type";

export class OrderDataLayer {
  id!: number;
  no!: string;
  price!: number; // Price in Stang to avoid floating point issues
  discount!: number; // Price in Stang to avoid floating point issues
  status!: OrderStatus;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
}
