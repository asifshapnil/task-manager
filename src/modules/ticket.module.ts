import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from 'src/controllers/ticket.controller';
import { Ticket } from 'src/entities/ticket.entity';
import { TicketService } from 'src/services/ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), JwtModule.register({})],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
