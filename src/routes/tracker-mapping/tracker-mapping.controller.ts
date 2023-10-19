import { Controller, Get, UseGuards, Query, HttpStatus, Param, Post, Body } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/guards/authenticated.guard';
import { TrackerMappingService } from './tracker-mapping.service';
import { TrackerMappingDto } from '../../@core/dto';
import { ApiResponse, Filter, Pagination } from '../../@core/models';
import { NeustarTrackerMapping } from '../../entities/neustartrackermapping.entity';

@Controller('tracker-mapping')
export class TrackerMappingController {
  constructor(private trackerMappingService: TrackerMappingService) {}

  @UseGuards(AuthenticatedGuard)
  @Post()
  async createTrackerMapping(@Body() data: TrackerMappingDto): Promise<ApiResponse<NeustarTrackerMapping>> {
    try {
      const { carrier, tracker } = data;
      const trackerMapping = await this.trackerMappingService.getTrackerMapping(carrier, tracker);

      if (trackerMapping) {
        return {
          success: false,
          statusCode: HttpStatus.FOUND,
          message: ['Tracker mapping already exists with same carrier and tracker.'],
        };
      }

      const newTrackerMapping = await this.trackerMappingService.saveTrackerMapping(data);

      return {
        success: true,
        statusCode: HttpStatus.OK,
        result: newTrackerMapping,
      };
    } catch (err) {
      return {
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: [err.message],
      };
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  async getTrackerMappings(@Query() query: Filter): Promise<ApiResponse<Pagination<NeustarTrackerMapping>>> {
    console.log(query);
    try {
      return {
        success: true,
        statusCode: HttpStatus.OK,
        result: await this.trackerMappingService.getTrackerMappings(query),
      };
    } catch (err) {
      return {
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: [err.message],
      };
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':carrier/:tracker')
  async getTrackerMapping(
    @Param('carrier') carrier: string,
    @Param('tracker') tracker: string,
  ): Promise<ApiResponse<NeustarTrackerMapping>> {
    try {
      const trackerMapping = await this.trackerMappingService.getTrackerMapping(carrier, tracker);

      if (!trackerMapping) {
        return {
          success: false,
          statusCode: HttpStatus.NOT_FOUND,
          message: ['Tracker mapping not found'],
        };
      }

      return {
        success: true,
        statusCode: HttpStatus.OK,
        result: trackerMapping,
      };
    } catch (err) {
      return {
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: [err.message],
      };
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Post(':carrier/:tracker')
  async updateTrackerMapping(
    @Param('carrier') carrier: string,
    @Param('tracker') tracker: string,
    @Body() data: TrackerMappingDto,
  ): Promise<ApiResponse<NeustarTrackerMapping>> {
    try {
      const trackerMapping = await this.trackerMappingService.getTrackerMapping(carrier, tracker);

      if (!trackerMapping) {
        return {
          success: false,
          statusCode: HttpStatus.NOT_FOUND,
          message: ['Tracker mapping not found.'],
        };
      }

      const newTrackerMapping = await this.trackerMappingService.saveTrackerMapping({ ...data, carrier, tracker });

      return {
        success: true,
        statusCode: HttpStatus.OK,
        result: newTrackerMapping,
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
