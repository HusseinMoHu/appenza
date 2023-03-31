import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { mainRoutes } from './routes/main.routes';
import logger from './middlewares/logger';
import { notFoundUrl } from './middlewares/notFoundUrl';

export const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(logger)
// app.use(morgan('combined')); // Use Morgan package for more detailed logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World!',
        content: 'Simple Order Checkout Process with a Mock Database in Node.js'
    });
});

app.use('/api', mainRoutes);
app.use(notFoundUrl)

app.listen(port, () => {
    console.info(`Server is running on port ${port}.`);
});