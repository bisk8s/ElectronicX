import { Router } from 'express';
import UsersController from '@controllers/UsersController';
import userSchema from '@schemas/UserSchema';
import validate from '@middlewares/SchemaValidator';
import verifyAuth from '@middlewares/Auth';

const userRoutes = Router();
const usersController = new UsersController();

userRoutes.use(usersController.startRepository);
userRoutes.get('/', usersController.all);
userRoutes.get('/:id', usersController.one);
userRoutes.post('/', validate(userSchema), usersController.save);

userRoutes.delete('/:id', verifyAuth, usersController.remove);

export default userRoutes;
