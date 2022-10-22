import { Module } from '@nestjs/common';
import { WineModule } from './modules/wines.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.modules'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://alexandreoliv29:704010Sa@vinum.8t9uzyh.mongodb.net/?retryWrites=true&w=majority',
    ),
    WineModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
