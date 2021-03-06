import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('increment', { unsigned: true })
  id: number;

  @Column()
  name: string;
}
