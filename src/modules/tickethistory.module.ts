import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from 'src/controllers/ticket.controller';
import { TickethistoryController } from 'src/controllers/tickethistory.controller';
import { Ticket } from 'src/entities/ticket.entity';
import { Tickethistory } from 'src/entities/tickethistory.entity';
import { TicketService } from 'src/services/ticket.service';
import { TickethistoryService } from 'src/services/tickethistory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tickethistory]), JwtModule.register({})],
  controllers: [TickethistoryController],
  providers: [TickethistoryService]
})
export class TickethistoryModule {}
