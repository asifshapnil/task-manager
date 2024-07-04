import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationController } from 'src/controllers/notification.controller';
import { Ticket } from 'src/entities/ticket.entity';
import { NotificationService } from 'src/services/notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), JwtModule.register({})],
  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationModule {}
