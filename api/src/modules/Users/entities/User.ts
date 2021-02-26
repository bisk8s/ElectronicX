import {
  Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate,
} from 'typeorm';
import { hash, compare } from 'bcryptjs';

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    username: string;

    @Column({ select: false, nullable: false })
    password: string;

    @BeforeUpdate()
    @BeforeInsert()
    async hashPassword(): Promise<void> {
      this.password = await hash(this.password, 10);
    }

    async comparePassword(attempt: string): Promise<boolean> {
      try {
        const isValid = await compare(attempt, this.password);
        return isValid;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
}
