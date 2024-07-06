import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Timestamp,
} from 'typeorm';
import { Tickethistory } from './tickethistory.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refresh_token: string;

  @OneToMany(() => Tickethistory, tickethistory => tickethistory.user, {cascade: true})
  tickethistory: Tickethistory[];

  @Column('timestamp', {
    default: () => `now()`,
  })
  createdAt: Timestamp;
}
