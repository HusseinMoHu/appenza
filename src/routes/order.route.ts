import { OrderController } from '../controllers/order.controller';
import { OrderValidation } from '../validations/order.validation';
import { Router } from 'express';
export const orderRoute = Router();


orderRoute.post('/', OrderValidation.createOrder, OrderController.createOrder);
orderRoute.get('/', OrderController.getOrders);
// orderRoute.delete("/", OrderController.deleteOrder);
// orderRoute.put("/", OrderController.updateOrder);
// ... etc