import { IsString, IsNotEmpty, IsIn } from 'class-validator';
import { MediaType } from 'src/common/helpers/enum';

export class CreateMediaDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(Object.values(MediaType))
  type: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}
