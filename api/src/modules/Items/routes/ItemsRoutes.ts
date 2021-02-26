import { Router } from 'express';
import ItemsController from '@controllers/ItemsController';

const itemsRoutes = Router();
const itemController = new ItemsController();

itemsRoutes.use(itemController.startRepository);
itemsRoutes.get('/', itemController.all);
itemsRoutes.get('/:id', itemController.one);
itemsRoutes.post('/', itemController.save);
itemsRoutes.delete('/:id', itemController.remove);

export default itemsRoutes;
