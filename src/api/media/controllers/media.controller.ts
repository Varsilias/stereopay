import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { paginateResponse } from 'src/common/helpers/paginate';
import { CreateMediaDto } from '../dtos/create-media.dto';
import { QueryParamsDto } from '../dtos/query-params.dto';
import { SearchQueryParamsDto } from '../dtos/search-query-params.dto';
import { UpdateMediaDto } from '../dtos/update-media.dto';
import { MediaService } from '../services/media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async createMedia(@Body() createMediaDto: CreateMediaDto) {
    return await this.mediaService.createMedia(createMediaDto);
  }

  @Get()
  async getMedia(@Query() query: QueryParamsDto) {
    const [result, count] = await this.mediaService.getMedia(query);
    return paginateResponse([result, count], query.page, query.perPage);
  }

  @Get('search')
  async searchMedia(@Query() searchQuery: SearchQueryParamsDto) {
    return this.mediaService.searchMedia(searchQuery);
  }

  @Get(':id')
  async getMediaById(@Param('id') id: string) {
    return await this.mediaService.findMediaById(id);
  }

  @Patch(':id')
  async updatedMedia(
    @Param('id') id: string,
    @Body() updatedMediaDto: UpdateMediaDto,
  ) {
    return await this.mediaService.updateMediaStatus(id, updatedMediaDto);
  }

  @Delete(':id')
  async deleteMedia(@Param('id') id: string) {
    return await this.mediaService.deleteMediaById(id);
  }
}
