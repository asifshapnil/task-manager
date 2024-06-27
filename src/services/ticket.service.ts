import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base-service';
import { Category } from 'src/entities/category.entity';
import { Ticket } from 'src/entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService extends BaseService {
  constructor(@InjectRepository(Ticket) public ticketRepository: Repository<Ticket>) {
    super(ticketRepository, ['tickethistory']);
  }
}
