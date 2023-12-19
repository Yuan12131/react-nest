import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'nest' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
