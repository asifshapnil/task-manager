import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base-service';
import { Category } from 'src/entities/category.entity';
import { Ticket } from 'src/entities/ticket.entity';
import { Tickethistory } from 'src/entities/tickethistory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TickethistoryService extends BaseService {
  constructor(@InjectRepository(Tickethistory) public tickethistoryRepository: Repository<Tickethistory>) {
    super(tickethistoryRepository, ['ticket', 'user']);
  }
}
