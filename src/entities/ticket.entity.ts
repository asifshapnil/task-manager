import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    Timestamp,
} from 'typeorm';
import { Category } from './category.entity';
import { Tickethistory } from './tickethistory.entity';

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => Category, category => category.tickets)
    category: Category;

    @OneToMany(() => Tickethistory, tickethistory => tickethistory.ticket)
    tickethistory: Tickethistory;

    @Column('timestamp', {
        default: () => `now()`,
    })
    createdAt: Timestamp;
}
