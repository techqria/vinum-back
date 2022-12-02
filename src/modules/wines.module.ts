import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WineController } from '../controllers/wine.controller';
import { Wine, WineSchema } from '../database/schemas/wine.schema';
import { WineService } from '../services/wine.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wine.name, schema: WineSchema }]),
  ],
  controllers: [WineController],
  providers: [WineService],
})
export class WineModule {}
