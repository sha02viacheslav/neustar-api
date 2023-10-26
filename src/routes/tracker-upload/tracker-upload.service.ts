import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrackerUploadDto } from '../../@core/dto';
import { NeustarTrackerUpload } from '../../entities/uploads.entity';

@Injectable()
export class TrackerUploadService {
  constructor(
    @InjectRepository(NeustarTrackerUpload)
    private trackerUploadRepo: Repository<NeustarTrackerUpload>,
  ) {}

  async saveTrackerUpload(data: TrackerUploadDto) {
    return await this.trackerUploadRepo.save(data);
  }
}
