import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });
  app.enableCors({
    origin: "https://www.vinumeventos.com.br",
  });
  app.options('/*', (_, res) => {
    res.sendStatus(200);
  });
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
