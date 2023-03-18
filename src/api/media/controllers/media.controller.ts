import { Controller, Get } from '@nestjs/common';
import { MediaService } from '../services/media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get()
  getHello(): string {
    return this.mediaService.getHello();
  }
}
