import { IOrder } from '../interfaces/IOrder';
import { MockDatabase } from '../mocks/mock.database';

export class Order {

    constructor(
    public id: number,
    public items: Array<{ productId: number; quantity: number }>,
    public total: number,
    public timestamp: Date
    ) { }

    public static getOrders() {
        try {
            return MockDatabase.orders;
        } catch (error) {
            throw new Error(`Could not get orders. Error: ${error}`);
        }
    }

    public static addOrder(order: IOrder) {
        try {
            MockDatabase.orders.push(order);
        } catch (error) {
            throw new Error(`Could not add order ${order}. Error: ${error}`);
        }
    }

    public static countOrders() {
        try {
            return MockDatabase.orders.length;
        } catch (error) {
            throw new Error(`Could not count orders. Error: ${error}`);
        }
    }
}
