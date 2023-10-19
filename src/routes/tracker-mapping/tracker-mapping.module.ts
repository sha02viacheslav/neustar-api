import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackerMappingController } from './tracker-mapping.controller';
import { TrackerMappingService } from './tracker-mapping.service';
import { NeustarTrackerMapping } from '../../entities/neustartrackermapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NeustarTrackerMapping])],
  controllers: [TrackerMappingController],
  providers: [TrackerMappingService],
})
export class TrackerMappingModule {}
