import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restaurants {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;
  
  @Column('varchar')
  type: string;

  @Column('varchar')
  rate: string;

  @Column('varchar')
  hr: string;

  @Column('varchar')
  plateTitle: string;

  @Column('varchar')
  plateDesc: string;

  @Column('varchar')
  plateValue: string;

  @Column('varchar')
  plateDrink: string;

  @Column('varchar')
  plateDrinkValue: string;
}
