import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://*.vercel.app', // wildcard for your Vercel preview + prod
    ],
    credentials: false,
  });
  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`API running on http://localhost:${port}`);
}
bootstrap();
