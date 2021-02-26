import {
  Entity, PrimaryGeneratedColumn, Column, ManyToMany,
} from 'typeorm';
import Item from '@entities/Item';

@Entity()
export default class ItemCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(() => Item, (item:Item) => item.categories, { eager: true })
    items: Promise<Item[]>;
}
