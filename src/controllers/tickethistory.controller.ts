import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { TickethistoryService } from 'src/services/tickethistory.service';

@Controller('tickethistory')
export class TickethistoryController extends BaseController {
  constructor(public tickethistoryService: TickethistoryService) {
    super(tickethistoryService);
  }
}
