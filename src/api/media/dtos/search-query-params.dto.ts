import { IsString, IsIn, IsNotEmpty } from 'class-validator';
import { MediaType } from 'src/common/helpers/enum';

export class SearchQueryParamsDto {
  @IsNotEmpty()
  @IsString()
  query: string;
}
