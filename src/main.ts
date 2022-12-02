import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'https://www.vinumeventos.com.br');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
      next();
  });

  app.enableCors({
      allowedHeaders:"*",
      origin: "https://www.vinumeventos.com.br"
  });
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
