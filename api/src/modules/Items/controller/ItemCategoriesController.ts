import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import ItemCategory from '@entity/ItemCategory';

export default class ItemCategoriesController {
    private ormRepository: Repository<ItemCategory>;

    startRepository(_rq:Request, _rs:Response, next:NextFunction) {
      if (this.ormRepository === undefined) {
        this.ormRepository = getRepository(ItemCategory);
      }
      next();
    }

    async all(_rq:Request, response:Response) {
      const data = await this.ormRepository.find();
      response.send(data);
    }

    async one(request: Request, response:Response) {
      const entry = await this.ormRepository.findOne(request.params.id);
      response.send(entry);
    }

    async save(request: Request, response:Response) {
      const entry = await this.ormRepository.save(request.body);
      response.send(entry);
    }

    async remove(request: Request, response:Response) {
      const entryToRemove = await this.ormRepository.findOne(request.params.id);
      await this.ormRepository.remove(entryToRemove);
      response.send({ code: 200, sucess: true });
    }
}
