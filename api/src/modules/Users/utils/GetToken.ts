import User from '@entities/User';
import * as jwt from 'jsonwebtoken';

const { APP_SECRET } = process.env;

export default async function getToken(user:User, password:string) {
  const success = await user.comparePassword.bind(user)(password);
  const token = jwt.sign({ id: user.id }, APP_SECRET, { expiresIn: 86400 });
  return { success, token };
}
