import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // Strips away unknown properties
    forbidNonWhitelisted: true, // Throws error on unknown properties
    transform: true, // Automatically transform incoming data to DTO objects
  }));
  // Increase request size limit for JSON and URL-encoded bodies
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  await app.listen(3000);
}
bootstrap();
