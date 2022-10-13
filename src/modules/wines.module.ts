import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WineController } from 'src/controllers/wine.controller';
import { Wine, WineSchema } from 'src/database/schemas/wine.schema';
import { WineService } from 'src/services/wine.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wine.name, schema: WineSchema }]),
  ],
  controllers: [WineController],
  providers: [WineService],
})
export class WineModule {}
