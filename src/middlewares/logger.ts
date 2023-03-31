import { NextFunction, Request, Response } from 'express'

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const { method, path } = req
  const nowUTC = new Date().toISOString()
  console.info(`[${nowUTC}] - ${method} ${path} was called`)
  next()
}

export default logger