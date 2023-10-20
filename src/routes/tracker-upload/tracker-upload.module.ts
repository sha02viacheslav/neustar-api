import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackerUploadController } from './tracker-upload.controller';
import { TrackerUploadService } from './tracker-upload.service';
import { NeustarTrackerUpload } from '../../entities/neustar-uploads.entity';
import { NeustarTrackerMapping } from '../../entities/neustartrackermapping.entity';
import { TrackerMappingService } from '../tracker-mapping/tracker-mapping.service';

@Module({
  imports: [TypeOrmModule.forFeature([NeustarTrackerUpload, NeustarTrackerMapping])],
  controllers: [TrackerUploadController],
  providers: [TrackerUploadService, TrackerMappingService],
})
export class TrackerUploadModule {}
