import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrackerMappingDto } from '../../@core/dto';
import { Filter, Pagination } from '../../@core/models';
import { NeustarTrackerMapping } from '../../entities/tracker-mapping.entity';

@Injectable()
export class TrackerMappingService {
  constructor(
    @InjectRepository(NeustarTrackerMapping)
    private trackerMappingRepo: Repository<NeustarTrackerMapping>,
  ) {}

  async getTrackerMappings(filter: Filter): Promise<Pagination<NeustarTrackerMapping>> {
    const { pageSize, pageIndex, sort, order } = filter;
    const qb = this.trackerMappingRepo.createQueryBuilder('NeustarTrackerMapping');

    if (pageSize != undefined) {
      qb.take(pageSize);
    }
    if (pageIndex != undefined && pageSize != undefined) {
      qb.skip(pageSize * (pageIndex - 1));
    }

    qb.orderBy(`NeustarTrackerMapping.${sort}`, order == 'asc' ? 'ASC' : 'DESC');

    const [data, totalCount] = await qb.getManyAndCount();

    return {
      pageIndex: pageIndex,
      pageSize: pageSize,
      totalCount: totalCount,
      data: data,
    };
  }

  async getTrackerMapping(carrier: string, tracker: string) {
    return await this.trackerMappingRepo.findOne({ where: { carrier: carrier, tracker: tracker } });
  }

  async saveTrackerMapping(data: TrackerMappingDto) {
    return await this.trackerMappingRepo.save(data);
  }

  async deleteTrackerMapping(carrier: string, tracker: string) {
    await this.trackerMappingRepo.delete({ carrier: carrier, tracker: tracker });
    return true;
  }
}
