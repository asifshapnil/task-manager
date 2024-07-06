import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    Timestamp,
} from 'typeorm';
import { User } from './user.entity';
import { Ticket } from './ticket.entity';

@Entity()
export class Tickethistory{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    action: string;

    @ManyToOne(() => Ticket, ticket => ticket.tickethistory)
    ticket: Ticket;

    @ManyToOne(() => User, user => user.tickethistory, { eager: true })
    user: User;

    @Column('timestamp', {
        default: () => `now()`,
    })
    createdAt: Timestamp;
}
