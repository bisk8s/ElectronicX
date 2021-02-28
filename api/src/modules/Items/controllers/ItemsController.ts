import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import Item from '@entities/Item';

let ormRepository: Repository<Item>;

export default class ItemsController {
  startRepository(_rq:Request, _rs:Response, next:NextFunction) {
    if (ormRepository === undefined) {
      ormRepository = getRepository(Item);
    }
    next();
  }

  async all(_rq:Request, response:Response) {
    const data = await ormRepository.find({ order: { id: 'DESC' } });
    response.send(data);
  }

  async one(request: Request, response:Response) {
    const instance = await ormRepository.findOne(request.params.id);
    const categories = await instance.categories;
    response.send({ ...instance, categories });
  }

  async save(request: Request, response:Response) {
    try {
      const instance = ormRepository.create(<Item>request.body);
      await ormRepository.save(instance);
      response.send(instance);
    } catch (error) {
      const { message } = error;
      response.status(422).send({ message });
    }
  }

  async remove(request: Request, response:Response) {
    try {
      const entryToRemove = await ormRepository.findOne(request.params.id);
      await ormRepository.remove(entryToRemove);
      response.status(200).send({ sucess: true });
    } catch (error) {
      const { message } = error;
      response.status(422).send({ message });
    }
  }
}
