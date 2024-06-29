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

  @Column()
  refresh_token: string;

  @OneToMany(() => Tickethistory, tickethistory => tickethistory.user)
  actionhistory: Tickethistory[];

  @Column('timestamp', {
    default: () => `now()`,
  })
  createdAt: Timestamp;
}
