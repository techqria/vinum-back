import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  if(req.method === 'OPTIONS') { return res.status(200).json(({ body: "OK" })) }
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
