import Joi, { ValidationError } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { JoiOverriddenMessages } from './config';

export class OrderValidation {
    public static createOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const schema = Joi.object({
                items: Joi.array().items(
                    Joi.object({
                        productId: Joi.number().min(1).required().label('Product ID'),
                        quantity: Joi.number().min(1).required().label('Item Quantity')
                    })
                ).min(1).required().label('Order Items')
            });

            req.body = await schema.validateAsync(req.body, {
                errors: { wrap: { label: false } },
                messages: JoiOverriddenMessages
            });

            next();

        } catch (err) {
            if (err instanceof ValidationError) {
                return res.status(400).send({ message: err.details[0].message });
            } else {
                console.error(err);
                return res.status(500).send({ message: 'Something went wrong' });
            }
        }
    };
}