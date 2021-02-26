import { Router } from 'express';
import ItemsController from '@controllers/ItemsController';
import verifyAuth from '@middlewares/Auth';

const itemsRoutes = Router();
const itemController = new ItemsController();

itemsRoutes.use(itemController.startRepository);
itemsRoutes.get('/', itemController.all);
itemsRoutes.get('/:id', itemController.one);

itemsRoutes.post('/', verifyAuth, itemController.save);
itemsRoutes.delete('/:id', verifyAuth, itemController.remove);

export default itemsRoutes;
