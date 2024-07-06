import { Controller, Get, UseGuards } from '@nestjs/common';
import { BaseController } from 'src/common/base-controller';
import { AccessTokenGuard } from 'src/core/guards/auth.guard';
import { NotificationService } from 'src/services/notification.service';

@Controller('notifications')
export class NotificationController extends BaseController {
  constructor(public notificationService: NotificationService) {
    super(notificationService);
  }

  @UseGuards(AccessTokenGuard)
  @Get('getExpiryNotifications')
  getExpiryNotifications(): Promise<any> {
    return this.notificationService.getExpiryNotifications();
  }
}
