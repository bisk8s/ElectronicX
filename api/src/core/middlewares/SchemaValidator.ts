import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

function validate(schema:Joi.ObjectSchema) {
  return (request:Request, response:Response, next:NextFunction) => {
    try {
      Joi.attempt(request.body, schema);
    } catch (error) {
      response.status(422).json({ error: 'invalid schema' });
    }
    next();
  };
}
export default validate;
