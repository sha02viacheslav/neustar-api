import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackerUploadController } from './tracker-upload.controller';
import { TrackerUploadService } from './tracker-upload.service';
import { NeustarTrackerUpload } from '../../entities/uploads.entity';
import { NeustarTrackerMapping } from '../../entities/tracker-mapping.entity';
import { TrackerMappingService } from '../tracker-mapping/tracker-mapping.service';

@Module({
  imports: [TypeOrmModule.forFeature([NeustarTrackerUpload, NeustarTrackerMapping])],
  controllers: [TrackerUploadController],
  providers: [TrackerUploadService, TrackerMappingService],
})
export class TrackerUploadModule {}
