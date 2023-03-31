import { MockDatabase } from '../mocks/mock.database';

export class Product {

    public static getProducts() {
        try {
            return MockDatabase.products;
        } catch (err) {
            throw new Error(`Could not get products. Error: ${err}`);
        }
    }

    public static getProductById(id: number) {
        try {
            const product = MockDatabase.products.find((product) => product.id === id);
            return product;
        } catch (err) {
            throw new Error(`Could not get product with ID ${id}. Error: ${err}`);
        }
    }

    public static updateProductStock(id: number, stock: number) {
        try {
            const product = this.getProductById(id);
            if (!product) {
                throw new Error(`Invalid product ID: ${id}`);
            }
            product.stock = stock;
        } catch (err) {
            throw new Error(`Could not update product stock with ID ${id}. Error: ${err}`);
        }
    }
}
