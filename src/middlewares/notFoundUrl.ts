import { NextFunction, Request, Response } from 'express'

export const notFoundUrl = (req: Request, res: Response, next: NextFunction) => {
  console.info(`The requested ${req.originalUrl} URL was not found on this server.`);
  res.status(404).send({
    message: 'Not Found',
    content: `The requested ${req.originalUrl} URL was not found on this server.`
  });
};