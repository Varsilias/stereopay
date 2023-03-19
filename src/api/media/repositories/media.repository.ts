import { Injectable } from '@nestjs/common';
import { MediaType, StatusType } from 'src/common/helpers/enum';
import { Repository, DataSource } from 'typeorm';
import { SearchQueryParamsDto } from '../dtos/search-query-params.dto';
import { UpdateMediaDto } from '../dtos/update-media.dto';
import { MediaEntity } from '../entities/media.entity';

@Injectable()
export class MediaRepository extends Repository<MediaEntity> {
  constructor(private dataSource: DataSource) {
    super(MediaEntity, dataSource.createEntityManager());
  }

  async searchByTypeOrDescription(searchQuery: SearchQueryParamsDto) {
    const { query } = searchQuery;
    const media = await this.createQueryBuilder('media')
      .select('media')
      .where('media.deletedAt = :deletedAt', { deletedAt: null })
      .where('media.description LIKE :searchTerm', {
        searchTerm: `%${query}%`,
      })
      .orWhere('media.type LIKE :searchTerm', { searchTerm: `%${query}%` })
      .getMany();

    return media;
  }

  async updateMediaStatus(media: MediaEntity, updatedMediaDto: UpdateMediaDto) {
    return await this.createQueryBuilder()
      .update(MediaEntity)
      .set({
        status: updatedMediaDto.status,
      })
      .where('id = :id', { id: media.id })
      .execute();
  }

  async softDeleteMedia(media: MediaEntity) {
    return await this.createQueryBuilder('media')
      .softDelete()
      .where('id = :id', { id: media.id })
      .execute();
  }
}
