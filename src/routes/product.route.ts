import { ProductController } from './../controllers/product.controller';
import { Router } from 'express';
export const productRoute = Router();


productRoute.get('/', ProductController.getAllProducts);
// productRoute.post('/', ProductController.addProduct)
// productRoute.put('/', ProductController.updateProduct)
// productRoute.delete('/', ProductController.deleteProduct)
// ... etc
