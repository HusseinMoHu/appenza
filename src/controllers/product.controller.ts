import { Request, Response } from 'express';
import { Product } from '../models/product.model';

export class ProductController {
    // GET /api/product
    public static getAllProducts(req: Request, res: Response) {
        try {
            const products = Product.getProducts();
            res.status(200).json(products);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}