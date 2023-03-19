import { IsNumberString } from 'class-validator';

export class QueryParamsDto {
  @IsNumberString()
  perPage: number;

  @IsNumberString()
  page: number;
}
