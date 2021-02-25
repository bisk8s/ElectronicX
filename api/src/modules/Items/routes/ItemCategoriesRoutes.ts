import {ItemCategoriesController} from "@controller/ItemCategoriesController";
import { Router } from 'express';


const itemCategories = Router();
const itemCategoryController = new ItemCategoriesController();


itemCategories.use(itemCategoryController.startRepository);
itemCategories.get('/', itemCategoryController.all);
itemCategories.get('/:id', itemCategoryController.one);
itemCategories.post('/', itemCategoryController.save);
itemCategories.delete('/:id', itemCategoryController.remove);

export default itemCategories;