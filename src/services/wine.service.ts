import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wine, WineDocument } from '../database/schemas/wine.schema';
import { WineDto } from '../dtos/wine.dto';

@Injectable()
export class WineService {
  constructor(@InjectModel(Wine.name) private wineModel: Model<WineDocument>) {}

  async create(wine: WineDto): Promise<WineDto> {
    const newWine = new this.wineModel(wine);
    return newWine.save();
  }

  async findWine(id: string): Promise<WineDto> {
    return await this.wineModel.findById(id);
  }

  async getAll(): Promise<WineDto[]> {
    return await this.wineModel.find();
  }

  async updateWine(id: string, wine: WineDto): Promise<WineDto> {
    const oldWine = await this.wineModel.findByIdAndUpdate(id, wine);
    return oldWine.save();
  }

  async deleteWine(id: string): Promise<WineDto> {
    return await this.wineModel.findByIdAndDelete(id);
  }
}
