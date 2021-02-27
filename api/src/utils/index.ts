import Item from '@root/modules/Items/entities/Item';
import ItemCategory from '@root/modules/Items/entities/ItemCategory';
import User from '@root/modules/Users/entities/User';
import { getRepository, Repository } from 'typeorm';

export async function truncateUsers() {
  const ormRepository: Repository<User> = getRepository(User);
  const result = await ormRepository.query('DELETE FROM user');
  return result;
}

export async function truncateItems() {
  const ormRepository: Repository<Item> = getRepository(Item);
  const result = await ormRepository.query('DELETE FROM item');
  return result;
}

export async function truncateItemCategories() {
  const ormRepository: Repository<ItemCategory> = getRepository(ItemCategory);
  const result = await ormRepository.query('DELETE FROM item');
  return result;
}
