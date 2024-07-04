import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base-service';
import { Category } from 'src/entities/category.entity';
import { Ticket } from 'src/entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService extends BaseService {
  constructor(@InjectRepository(Ticket) public ticketRepository: Repository<Ticket>) {
    super(ticketRepository, ['tickethistory']);
  }

  async getExpiryNotifications() {
    const currentDate = new Date();
    const twoDaysLater = new Date(currentDate);
    twoDaysLater.setDate(currentDate.getDate() + 2);

    const query = `
      SELECT title, expirydate FROM ticket
      WHERE expirydate >= $1
      AND expirydate <= $2
    `;

    const results = await this.ticketRepository.query(query, [currentDate, twoDaysLater]);
    return results;
  }
}
