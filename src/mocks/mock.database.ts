import { IOrder } from '../interfaces/IOrder';
import { IProduct } from '../interfaces/IProduct';

export class MockDatabase {
    static products: IProduct[] = [
        { id: 1, name: 'Product 1', price: 100, stock: 10 },
        { id: 2, name: 'Product 2', price: 400, stock: 18 },
        { id: 3, name: 'Product 3', price: 200, stock: 5 },
        { id: 4, name: 'Product 4', price: 300, stock: 12 },
        { id: 5, name: 'Product 5', price: 800, stock: 20 },
        { id: 6, name: 'Product 6', price: 600, stock: 15 },
        { id: 7, name: 'Product 7', price: 200, stock: 10 },
        { id: 8, name: 'Product 8', price: 300, stock: 19 },
        { id: 9, name: 'Product 9', price: 700, stock: 7 },
        { id: 10, name: 'Product 10', price: 1000, stock: 3 },
    ];

    static orders: IOrder[] = [];
}