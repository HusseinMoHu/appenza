import { Request, Response } from 'express';
import { MockDatabase } from '../mocks/mock.database';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { IOrderItem } from '../interfaces/IOrder';

export class OrderController {
    // POST /api/order
    public static createOrder(req: Request, res: Response) {
        try {
            // In a real application, we would use a JWT to get the user ID
            // const userId = req.user.id;

            const items: IOrderItem[] = req.body.items;
            let total = 0;

            for (const item of items) {
                const product = Product.getProductById(item.productId);
                if (!product) {
                    return res.status(400).json({ error: `Invalid product ID: ${item.productId}` });
                }

                if (product.stock < item.quantity) {
                    return res.status(400).json({ error: `Insufficient stock for product ID: ${item.productId}` });
                }

                total += product.price * item.quantity;

                // In a real application, we would use a database transaction
                // to ensure that the stock is updated only if the order is created
                // (i.e. we would rollback the stock update if the order creation fails)
                // For simplicity, we can updating the stock here directly, but this is not ideal
                // MockDatabase.updateProductStock(product.id, product.stock - item.quantity);
            }

            // Since we are not using a real database with transaction, we can move the stock update here
            for (const item of items) {
                // We can safely assume that the product exists, since we already checked it above
                const product = Product.getProductById(item.productId);
                Product.updateProductStock(product!.id, product!.stock - item.quantity);
            }

            // In a real application, we would use a database auto-incrementing ID
            const newOrderId = Order.countOrders() + 1;

            const newOrder = new Order(newOrderId, items, total, new Date());
            Order.addOrder(newOrder);
            res.status(201).json(newOrder);
        } catch (err) {
            // In a real application, we would log this error with more context (e.g. the user ID)
            console.error(err);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }

    // GET /api/order
    public static getOrders(req: Request, res: Response) {
        try {
            // In a real application, we would use a JWT to get the user ID
            // const userId = req.user.id;

            const orders = Order.getOrders();
            res.status(200).json(orders);
        } catch (err) {
            // In a real application, we would log this error with more context (e.g. the user ID)
            console.error(err);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}