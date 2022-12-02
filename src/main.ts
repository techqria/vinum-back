import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });
  const options = {
    "origin": true, 
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200,
    "credentials":true,
    "allowedHeaders": "Content-Type, Accept,Authorization",

  }
  app.use(cor(options))
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
