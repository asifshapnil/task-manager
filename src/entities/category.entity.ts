import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from 'typeorm';
import { Ticket } from './ticket.entity';
  
  @Entity()
  export class Category {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @OneToMany(() => Ticket, ticket => ticket.category)
    tickets: Ticket[];
  }
  