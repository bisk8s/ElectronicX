import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import User from '@entities/User';
import getToken from '../utils/GetToken';

let ormRepository: Repository<User>;

export default class UsersController {
  startRepository(_rq:Request, _rs:Response, next:NextFunction) {
    if (ormRepository === undefined) {
      ormRepository = getRepository(User);
    }
    next();
  }

  async all(_rq:Request, response:Response) {
    const data = await ormRepository.find({ order: { id: 'DESC' } });
    response.send(data);
  }

  async one(request: Request, response:Response) {
    const instance = await ormRepository.findOne(request.params.id);
    response.send(instance);
  }

  async save(request: Request, response:Response) {
    try {
      const instance = ormRepository.create(<User>request.body);
      const user = await ormRepository.save(instance);

      const { success, token } = await getToken(user, user.password);

      response.status(200).send({ success, id: instance.id, token });
    } catch (error) {
      const { message } = error;
      response.status(422).send({ message });
    }
  }

  async remove(request: Request, response:Response) {
    if (request.body.authId !== request.params.id) {
      response.status(401).send({ error: 'You can\'t delete this user' });
      return;
    }
    try {
      await ormRepository.delete(request.params.id);
      response.status(200).send({ sucess: true });
    } catch (error) {
      const { message } = error;
      response.status(422).send({ message });
    }
  }
}
