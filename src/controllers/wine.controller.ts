import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WineDto } from '../dtos/wine.dto';
import { WineService } from '../services/wine.service';

@Controller('wine')
export class WineController {
  userService: any;
  constructor(private readonly wineService: WineService) {}

  @Get('/find/:id')
  async getWine(@Param() params): Promise<WineDto> {
    try {
      const response = await this.wineService.findWine(params.id);

      return response;
    } catch (error) {
      return error.message;
    }
  }

  @Get('/listAll')
  async getAll(): Promise<WineDto[]> {
    try {
      const response = await this.wineService.getAll();

      return response;
    } catch (error) {
      return error.message;
    }
  }

  @Post('/createwine')
  async createWine(@Body() wine): Promise<WineDto> {
    try {
      const response = await this.wineService.create(wine);

      return response;
    } catch (error) {
      return error.message;
    }
  }

  @Put("/update-wine/:id")
  async updateWine(@Param() params, @Body() wine): Promise<WineDto> {
    try {
      const response = await this.wineService.updateWine(params.id, wine);

      return response;
    } catch (error) {
      return error.message;
    }
  }

  @Delete('remove/:id')
  async deleteWine(@Param() params): Promise<WineDto> {
    try {
      const response = await this.wineService.deleteWine(params.id);

      return response;
    } catch (error) {
      return error.message;
    }
  }
}


