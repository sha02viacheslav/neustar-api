import { IsString } from 'class-validator';

export class TrackerMappingDto {
  @IsString()
  carrier: string;

  @IsString()
  tracker: string;

  @IsString()
  all_headers: string;
}
