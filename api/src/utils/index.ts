import Item from '@root/modules/Items/entities/Item';
import User from '@root/modules/Users/entities/User';
import { getRepository, Repository } from 'typeorm';

export async function truncateUsers() {
  const ormRepository: Repository<User> = getRepository(User);
  return await ormRepository.query('DELETE FROM user');
}

export async function truncateItems() {
  const ormRepository: Repository<Item> = getRepository(Item);
  return await ormRepository.query('DELETE FROM item');
}
