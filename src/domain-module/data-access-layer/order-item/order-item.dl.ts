export class OrderItemDataLayer {
  id!: number;
  orderId!: number;
  name!: string;
  price!: number; // Price in Stang to avoid floating point issues
  quantity!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
}
