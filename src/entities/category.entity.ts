import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    Timestamp,
} from 'typeorm';
import { Ticket } from './ticket.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Ticket, ticket => ticket.category, {cascade: true})
    tickets: Ticket[];

    @Column('timestamp', {
        default: () => `now()`,
    })
    createdAt: Timestamp;
}
