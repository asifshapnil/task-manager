import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { TicketService } from 'src/services/ticket.service';

@Controller('tickets')
export class TicketController extends BaseController{
  constructor(public ticketService: TicketService) {
    super(ticketService);
  }
}
