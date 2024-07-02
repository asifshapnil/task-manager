import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // Strips away unknown properties
    forbidNonWhitelisted: true, // Throws error on unknown properties
    transform: true, // Automatically transform incoming data to DTO objects
}));
  await app.listen(3000);
}
bootstrap();
