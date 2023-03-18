import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaController } from './controllers/media.controller';
import { MediaEntity } from './entities/media.entity';
import { MediaRepository } from './repositories/media.repository';
import { MediaService } from './services/media.service';

@Module({
  imports: [TypeOrmModule.forFeature([MediaEntity])],
  controllers: [MediaController],
  exports: [],
  providers: [MediaService, MediaRepository],
})
export class MediaModule {}
