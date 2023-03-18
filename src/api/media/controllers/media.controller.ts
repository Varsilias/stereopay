import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CreateMediaDto } from '../dtos/create-media.dto';
import { MediaService } from '../services/media.service';
import { TransformInterceptor } from 'src/common/interceptors/response-transform.interceptor';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get()
  getHello(): string {
    return this.mediaService.getHello();
  }

  @Post()
  createMedia(@Body() createMediaDto: CreateMediaDto) {
    return createMediaDto;
  }
}
