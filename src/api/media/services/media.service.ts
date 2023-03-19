import { Injectable } from '@nestjs/common';
import { NotFoundException } from 'src/common/exceptions/notfound.exception';
import { CreateMediaDto } from '../dtos/create-media.dto';
import { QueryParamsDto } from '../dtos/query-params.dto';
import { SearchQueryParamsDto } from '../dtos/search-query-params.dto';
import { UpdateMediaDto } from '../dtos/update-media.dto';
import { MediaRepository } from '../repositories/media.repository';

@Injectable()
export class MediaService {
  constructor(private readonly mediaRepository: MediaRepository) {}

  async createMedia(createMediaDto: CreateMediaDto) {
    const media = this.mediaRepository.create(createMediaDto);
    return await this.mediaRepository.save(media);
  }

  async getMedia(query: QueryParamsDto) {
    const take = Number(query?.take) || 10;
    const page = Number(query?.page) || 1;
    const skip = (page - 1) * take;

    return await this.mediaRepository.findAndCount({ take, skip });
  }

  async findMediaById(id: string) {
    const media = await this.mediaRepository.findOne({ where: { id } });
    if (!media) {
      throw new NotFoundException(`media with id ${id} does not exist`, {});
    }
    return media;
  }

  async searchMedia(searchQuery: SearchQueryParamsDto) {
    const media = await this.mediaRepository.searchByTypeOrDescription(
      searchQuery,
    );
    return media;
  }

  async updateMediaStatus(id: string, updatedMediaDto: UpdateMediaDto) {
    const media = await this.findMediaById(id);
    return this.mediaRepository.updateMediaStatus(media, updatedMediaDto);
  }

  async deleteMediaById(id: string) {
    const media = await this.findMediaById(id);
    return this.mediaRepository.softDeleteMedia(media);
  }
}
