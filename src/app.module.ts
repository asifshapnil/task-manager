import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Category } from './entities/category.entity';
import { Ticket } from './entities/ticket.entity';
import { Tickethistory } from './entities/tickethistory.entity';

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
