import { Controller, Get, Response, UseGuards, Query, HttpStatus, Param } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/guards/authenticated.guard';
import { NeustarService } from './neustar.service';
import { ApiResponse, Filter, Pagination } from '../../@core/models';
import { NeustarOrderInsights } from '../../entities/neustarorderinsights.entity';

@Controller('neustar')
export class NeustarController {
  constructor(private neustarService: NeustarService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('postgresdata')
  async getPostgresData(@Query() query: Filter): Promise<ApiResponse<Pagination<NeustarOrderInsights>>> {
    try {
      return {
        success: true,
        statusCode: HttpStatus.OK,
        result: await this.neustarService.getPostgresDataWithRawQuery(query),
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
  @Get('postgrescount')
  async getPostgresCount(@Query() query: Filter) {
    try {
      return {
        success: true,
        statusCode: HttpStatus.OK,
        result: await this.neustarService.getPostgresCountWithRawQuery(query),
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
  @Get(':id')
  async getRecord(@Param('id') id: number): Promise<ApiResponse<NeustarOrderInsights>> {
    try {
      const record = await this.neustarService.getRecord(id);

      if (!record) {
        return {
          success: false,
          statusCode: HttpStatus.NOT_FOUND,
          message: ['Record not found'],
        };
      }

      return {
        success: true,
        statusCode: HttpStatus.OK,
        result: record,
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
