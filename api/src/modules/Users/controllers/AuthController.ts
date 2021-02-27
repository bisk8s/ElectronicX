import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import User from '@entities/User';

let ormRepository: Repository<User>;
const { APP_SECRET } = process.env;

export default class AuthController {
  startRepository(_rq:Request, _rs:Response, next:NextFunction) {
    if (ormRepository === undefined) {
      ormRepository = getRepository(User);
    }
    next();
  }

  async authenticate(request: Request, response:Response) {
    try {
      const { username, password } = request.body;
      const user = await ormRepository.findOne({ where: { username }, select: ['id', 'password'] });

      const sucess = await user.comparePassword.bind(user)(password);
      const token = jwt.sign({ id: user.id }, APP_SECRET, { expiresIn: 86400 });

      if (sucess) {
        response.status(200).send({ sucess, token });
        return;
      }
    } catch (error) {
      const { message } = error;
      response.status(422).send({ message });
    }
    response.status(401).send();
  }
}
