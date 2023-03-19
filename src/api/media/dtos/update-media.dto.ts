import { IsString, IsNotEmpty, IsIn } from 'class-validator';
import { StatusType } from 'src/common/helpers/enum';

export class UpdateMediaDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(Object.values(StatusType))
  status: string;
}
