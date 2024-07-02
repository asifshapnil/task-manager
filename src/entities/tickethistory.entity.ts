import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    Timestamp,
} from 'typeorm';
import { User } from './user.entity';
import { Category } from './category.entity';
import { Ticket } from './ticket.entity';

@Entity()
export class Tickethistory{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    action: 'add' | 'update';

    @ManyToOne(() => Ticket, ticket => ticket.tickethistory)
    ticket: Ticket;

    @ManyToOne(() => User, user => user.actionhistory)
    user: User;

    @Column('timestamp', {
        default: () => `now()`,
    })
    createdAt: Timestamp;
}
