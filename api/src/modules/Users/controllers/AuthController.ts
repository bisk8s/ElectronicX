import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';

import User from '@entities/User';

let ormRepository: Repository<User>;

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
      const user = await ormRepository.findOne({ where: { username }, select: ['password'] });

      const sucess = await user.comparePassword.bind(user)(password);
      response.send({ sucess });
    } catch (error) {
      response.status(422).send(error);
    }
  }
}
