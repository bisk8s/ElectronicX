import { Router } from 'express';
import ItemCategoriesController from '@controllers/ItemCategoriesController';
import verifyAuth from '@middlewares/Auth';
import itemCategorySchema from '@schemas/ItemCategorySchema';
import validate from '@middlewares/SchemaValidator';

const itemCategories = Router();
const itemCategoryController = new ItemCategoriesController();

itemCategories.use(itemCategoryController.startRepository);
itemCategories.get('/', itemCategoryController.all);
itemCategories.get('/:id', itemCategoryController.one);

itemCategories.post('/', validate(itemCategorySchema), verifyAuth, itemCategoryController.save);
itemCategories.delete('/:id', verifyAuth, itemCategoryController.remove);

export default itemCategories;
