import { getRepository, Repository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import User from '@entity/User';

export default class UsersController {
    private userRepository: Repository<User>;

    startRepository(_rq:Request, _rs:Response, next:NextFunction) {
      if (this.userRepository === undefined) {
        this.userRepository = getRepository(User);
      }
      next();
    }

    async all(_rq:Request, response:Response) {
      const data = await this.userRepository.find();
      response.send(data);
    }

    async one(request: Request, response:Response) {
      const entry = await this.userRepository.findOne(request.params.id);
      response.send(entry);
    }

    async save(request: Request, response:Response) {
      const entry = await this.userRepository.save(request.body);
      response.send(entry);
    }

    async remove(request: Request, response:Response) {
      const entryToRemove = await this.userRepository.findOne(request.params.id);
      await this.userRepository.remove(entryToRemove);
      response.send({ code: 200, sucess: true });
    }
}
