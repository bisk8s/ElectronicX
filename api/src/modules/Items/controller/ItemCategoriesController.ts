import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import ItemCategory from '@entity/ItemCategory';

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
    const entry = await ormRepository.findOne(request.params.id);
    response.send(entry);
  }

  async save(request: Request, response:Response) {
    const entry = await ormRepository.save(request.body);
    response.send(entry);
  }

  async remove(request: Request, response:Response) {
    const entryToRemove = await ormRepository.findOne(request.params.id);
    await ormRepository.remove(entryToRemove);
    response.send({ code: 200, sucess: true });
  }
}
