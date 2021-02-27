import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';

import User from '@entities/User';
import getToken from '../utils/GetToken';

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
      const user = await ormRepository.findOne({ where: { username }, select: ['id', 'password'] });

      const { success, token } = await getToken(user, password);

      if (success) {
        response.status(200).send({ sucess: success, token });
        return;
      }
    } catch (error) {
      const { message } = error;
      response.status(422).send({ message });
    }
    response.status(401).send();
  }
}
