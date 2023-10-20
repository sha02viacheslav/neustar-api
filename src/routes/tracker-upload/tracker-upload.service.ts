import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { existsSync, mkdirSync, writeFile } from 'fs';
import process from 'process';
import { TrackerUploadDto } from '../../@core/dto';
import { NeustarTrackerUpload } from '../../entities/neustar-uploads.entity';

@Injectable()
export class TrackerUploadService {
  constructor(
    @InjectRepository(NeustarTrackerUpload)
    private trackerUploadRepo: Repository<NeustarTrackerUpload>,
  ) {}

  async saveTrackerUpload(data: TrackerUploadDto) {
    return await this.trackerUploadRepo.save(data);
  }

  async uploadTracker(fileBuffer: Buffer, name: string): Promise<string> {
    const TRACKER_FOLDER = `${process.env.TRACKER_FOLDER}`;
    if (!existsSync(TRACKER_FOLDER)) {
      mkdirSync(TRACKER_FOLDER, { recursive: true });
    }

    const filePath = `${TRACKER_FOLDER}/${name}`;

    writeFile(filePath, fileBuffer, 'binary', (err) => {
      if (err) {
        throw new Error('Error while saving tracker file.');
      }
    });

    return filePath;
  }
}
