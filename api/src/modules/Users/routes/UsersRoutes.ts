import { UsersController } from "@controller/UsersController";
import { Router } from 'express';


const userRoutes = Router();
const usersController = new UsersController();

userRoutes.use(usersController.startRepository)
userRoutes.get('/', usersController.all);
userRoutes.get('/:id', usersController.one);
userRoutes.post('/', usersController.save);
userRoutes.delete('/:id', usersController.remove);

export default userRoutes;