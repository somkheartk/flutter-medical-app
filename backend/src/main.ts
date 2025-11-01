import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for Flutter app
  // For production, specify exact origins instead of '*'
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false, // Set to false when using wildcard origin
  });

  // Set global prefix
  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log('Medical App Backend is running on: http://localhost:3000');
}
bootstrap();
