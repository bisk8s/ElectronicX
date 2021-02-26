/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const { APP_SECRET } = process.env;

export default function verifyAuth(request:Request, response:Response, next:NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).send({ error: 'No token provided' });
  }

  const parts:string[] = authorization.split(' ');
  if (!(parts.length === 2)) {
    return response.status(401).send({ error: 'Invalid token' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).send({ error: 'Token malformated' });
  }

  jwt.verify(token, APP_SECRET, (err, decoded:any) => {
    if (err) return response.status(401).send({ error: 'Token invalid' });
    request.body.authId = decoded.id;
    next();
  });
}
