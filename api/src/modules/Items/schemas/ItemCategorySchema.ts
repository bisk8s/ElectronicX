import * as Joi from 'joi';
import ItemCategory from '@entities/ItemCategory';

const itemCategorySchema = Joi.object<ItemCategory>().keys({
  name: Joi.string().required(),
});
export default itemCategorySchema;
