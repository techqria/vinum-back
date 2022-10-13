import { Module } from '@nestjs/common';
import { WineModule } from './modules/wines.module';
import { WineController } from './controllers/wine.controller';
import { WineService } from './services/wine.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://qriatech:Qriatech%402022@cluster0.5sdralz.mongodb.net/VinumWine',
    ),
    WineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
