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

    @Column({type: 'date', nullable: true})
    expirydate: string;

    @Column({default: 'high'})
    priority: 'high' | 'medium' | 'low';

    @ManyToOne(() => Category, category => category.tickets)
    category: Category;

    @OneToMany(() => Tickethistory, tickethistory => tickethistory.ticket, {cascade: true, eager : true})
    tickethistory: Tickethistory[];

    @Column('timestamp', {
        default: () => `now()`,
    })
    createdAt: Timestamp;
}
