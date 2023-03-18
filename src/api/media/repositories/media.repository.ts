import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { MediaEntity } from '../entities/media.entity';

@Injectable()
export class MediaRepository extends Repository<MediaEntity> {
  constructor(private dataSource: DataSource) {
    super(MediaEntity, dataSource.createEntityManager());
  }

  getHello() {
    return 'Hello Form DataSource';
  }
}
