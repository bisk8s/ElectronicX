import * as Joi from 'joi';
import User from '@entities/User';

const userSchema = Joi.object<User>().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
export default userSchema;
