import { Controller, UseGuards, HttpStatus, Post, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthenticatedGuard } from 'src/guards/authenticated.guard';
import { TrackerUploadService } from './tracker-upload.service';
import { ApiResponse } from '../../@core/models';
import { NeustarTrackerUpload } from '../../entities/uploads.entity';
import { TrackerMappingService } from '../tracker-mapping/tracker-mapping.service';

@Controller('tracker-upload')
export class TrackerUploadController {
  constructor(
    private trackerUploadService: TrackerUploadService,
    private trackerMappingService: TrackerMappingService,
  ) {}

  @UseGuards(AuthenticatedGuard)
  @Post(':carrier/:tracker')
  @UseInterceptors(FileInterceptor('file'))
  async uploadTracker(
    @Param('carrier') carrier: string,
    @Param('tracker') tracker: string,
    @UploadedFile() file,
  ): Promise<ApiResponse<NeustarTrackerUpload>> {
    try {
      const trackerMapping = await this.trackerMappingService.getTrackerMapping(carrier, tracker);
      if (!trackerMapping) {
        return {
          success: false,
          statusCode: HttpStatus.NOT_FOUND,
          message: ['Tracker mapping not found'],
        };
      }

      const { buffer, originalname } = file;

      return {
        success: true,
        statusCode: HttpStatus.OK,
        result: await this.trackerUploadService.saveTrackerUpload({
          carrier,
          tracker,
          filename: originalname,
          file_buffer: buffer,
        }),
      };
    } catch (err) {
      return {
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: [err.message],
      };
    }
  }
}
