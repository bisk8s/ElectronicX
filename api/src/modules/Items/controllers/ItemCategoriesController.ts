import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import ItemCategory from '@entities/ItemCategory';

let ormRepository: Repository<ItemCategory>;

export default class ItemCategoriesController {
  startRepository(_rq:Request, _rs:Response, next:NextFunction) {
    if (ormRepository === undefined) {
      ormRepository = getRepository(ItemCategory);
    }
    next();
  }

  async all(_rq:Request, response:Response) {
    const data = await ormRepository.find();
    response.send(data);
  }

  async one(request: Request, response:Response) {
    const instance = await ormRepository.findOne(request.params.id, { loadEagerRelations: true });
    response.send(instance);
  }

  async save(request: Request, response:Response) {
    try {
      const instance = ormRepository.create(request.body);
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
