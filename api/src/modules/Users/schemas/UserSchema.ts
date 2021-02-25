import * as Joi from 'joi';
import User from '@entity/User';

const userSchema = Joi.object<User>().keys({
  username: Joi.string().required(),
  passwordHash: Joi.string().required(),
});
export default userSchema;
