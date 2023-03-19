import { DataFactory, Seeder } from 'nestjs-seeder';
import { InjectRepository } from '@nestjs/typeorm';
import { MediaEntity } from '../entities/media.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaSeeder implements Seeder {
  constructor(
    @InjectRepository(MediaEntity)
    private mediaRepository: Repository<MediaEntity>,
  ) {}

  drop(): Promise<any> {
    return this.mediaRepository.delete({});
  }

  seed(): Promise<any> {
    const media = DataFactory.createForClass(MediaEntity).generate(50);
    return this.mediaRepository.insert(media);
  }
}
