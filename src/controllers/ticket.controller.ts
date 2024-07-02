import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { CUTicketDto } from 'src/dto/ticket.dto';
import { TicketService } from 'src/services/ticket.service';

@Controller('tickets')
export class TicketController extends BaseController{
  constructor(public ticketService: TicketService) {
    super(ticketService,  {
      createDto: CUTicketDto,
      updateDto: CUTicketDto
  });
  }
}
