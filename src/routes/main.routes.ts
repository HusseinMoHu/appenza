import { Router } from 'express';
export const mainRoutes = Router();

import { productRoute } from './product.route';
import { orderRoute } from './order.route';

mainRoutes.use('/product', productRoute);
mainRoutes.use('/order', orderRoute);
// mainRoutes.use('/category', categoryRoute)
// mainRoutes.use('/user', userRoute)
// ... etc