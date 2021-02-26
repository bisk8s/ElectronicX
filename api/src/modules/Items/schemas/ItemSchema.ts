import * as Joi from 'joi';
import Item from '@entities/Item';
import ItemCategory from '@entities/ItemCategory';

const itemSchema = Joi.object<Item>().keys({
  name: Joi.string().required(),
  image: Joi.string().uri().optional(),
  price: Joi.number().required(),
  quantity: Joi.number().integer().required(),
  categories: Joi.array().items(Joi.object<ItemCategory>()).optional(),
});
export default itemSchema;
