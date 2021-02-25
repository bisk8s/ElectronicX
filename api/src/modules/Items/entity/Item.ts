import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import ItemCategory from '@entity/ItemCategory';

@Entity()
export default class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string

    @Column()
    price:number

    @Column()
    image?:string

    @Column()
    quantity:number

    @ManyToMany((type) => ItemCategory) @JoinTable()
    categories: ItemCategory[];
}
