import { Router } from 'express';
import ItemCategoriesController from '@controllers/ItemCategoriesController';

const itemCategories = Router();
const itemCategoryController = new ItemCategoriesController();

itemCategories.use(itemCategoryController.startRepository);
itemCategories.get('/', itemCategoryController.all);
itemCategories.get('/:id', itemCategoryController.one);
itemCategories.post('/', itemCategoryController.save);
itemCategories.delete('/:id', itemCategoryController.remove);

export default itemCategories;
