import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Category } from './entities/category.entity';
import { Ticket } from './entities/ticket.entity';
import { Tickethistory } from './entities/tickethistory.entity';
import { CategoryModule } from './modules/category.module';
import { TicketModule } from './modules/ticket.module';
import { UserModule } from './modules/user.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenGuard } from './core/guards/auth.guard';
import { NotificationModule } from './modules/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cpukhatds78s73dv0a4g-a.singapore-postgres.render.com',
      port: 5432,
      username: 'root',
      password: '7SFl9rhYo7rNf3gZXefNDmYincfx0eOv',
      database: 'taskmanager_xh1s',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [
        User,
        Ticket,
        Tickethistory,
        Category
      ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule,
    TicketModule,
    UserModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule { }
