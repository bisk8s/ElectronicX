import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import ItemCategory from '@entities/ItemCategory';

@Entity()
export default class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string

    @Column()
    price:number

    @Column({ nullable: true })
    image?:string

    @Column()
    quantity:number

    @ManyToMany(() => ItemCategory, (itemCategory) => itemCategory.items)
    @JoinTable()
    categories: Promise<ItemCategory[]>;
}
