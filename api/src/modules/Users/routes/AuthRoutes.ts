import { Router } from 'express';
import AuthController from '@controllers/AuthController';
import userSchema from '@schemas/UserSchema';
import validate from '@middlewares/SchemaValidator';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.use(authController.startRepository);
authRoutes.post('/', validate(userSchema), authController.authenticate);

export default authRoutes;
