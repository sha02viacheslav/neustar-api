import { IsString } from 'class-validator';

export class TrackerUploadDto {
  @IsString()
  carrier: string;

  @IsString()
  tracker: string;

  @IsString()
  path: string;
}
