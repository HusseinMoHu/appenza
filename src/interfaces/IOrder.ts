export interface IOrder {
  id: number;
  items: IOrderItem[];
  total: number;
  timestamp: Date;
}


export interface IOrderItem {
  productId: number;
  quantity: number
}