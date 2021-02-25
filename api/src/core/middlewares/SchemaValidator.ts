import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

function validate(schema:Joi.ObjectSchema) {
  return (req:Request, res:Response, next:NextFunction) => {
    try {
      Joi.attempt(req.body, schema);
    } catch (error) {
      res.status(422).json({ error });
    }
    next();
  };
}
export default validate;
