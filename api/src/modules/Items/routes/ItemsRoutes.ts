import { Router } from 'express';
import ItemsController from '@controllers/ItemsController';
import validate from '@middlewares/SchemaValidator';
import verifyAuth from '@middlewares/Auth';
import itemSchema from '@schemas/ItemSchema';

const itemsRoutes = Router();
const itemController = new ItemsController();

itemsRoutes.use(itemController.startRepository);
itemsRoutes.get('/', itemController.all);
itemsRoutes.get('/:id', itemController.one);

itemsRoutes.post('/', validate(itemSchema), verifyAuth, itemController.save);
itemsRoutes.delete('/:id', verifyAuth, itemController.remove);

export default itemsRoutes;
