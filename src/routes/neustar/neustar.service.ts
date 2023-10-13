import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filter, Pagination } from '../../@core/models';
import { NeustarOrderInsights } from '../../entities/neustarorderinsights.entity';

@Injectable()
export class NeustarService {
  constructor(
    @InjectRepository(NeustarOrderInsights)
    private tableRepo: Repository<NeustarOrderInsights>,
  ) {}

  async getPostgresDataWithRawQuery(filter: Filter): Promise<Pagination<NeustarOrderInsights>> {
    const { pageSize, pageIndex, search, sort, order, start, end, rawWhere } = filter;
    const qb = this.tableRepo.createQueryBuilder('NeustarOrderInsights');

    if (start) {
      qb.andWhere(`TO_CHAR(start_time, 'YYYY-MM-DD') >= '${start}'`);
    }
    if (end) {
      qb.andWhere(`TO_CHAR(end_time, 'YYYY-MM-DD') <= '${end}'`);
    }
    if (search) {
      qb.andWhere(
        `(NeustarOrderInsights.carrierid LIKE '%${search}%' OR NeustarOrderInsights.tracker_file_path LIKE '%${search}%')`,
      );
    }
    if (rawWhere) {
      qb.andWhere(rawWhere);
    }
    if (pageSize != undefined) {
      qb.take(pageSize);
    }
    if (pageIndex != undefined && pageSize != undefined) {
      qb.skip(pageSize * (pageIndex - 1));
    }
    if (sort === 'start_time') {
      qb.orderBy('start_time', order == 'asc' ? 'ASC' : 'DESC');
    } else if (sort) {
      qb.orderBy(`NeustarOrderInsights.${sort}`, order == 'asc' ? 'ASC' : 'DESC');
    }
    qb.addOrderBy(`NeustarOrderInsights.id`, 'DESC');

    const [data, totalCount] = await qb.getManyAndCount();

    const result = {
      pageIndex: pageIndex,
      pageSize: pageSize,
      totalCount: totalCount,
      data: data,
    };
    return result;
  }

  async getPostgresCountWithRawQuery(filter: Filter) {
    const { start, end, rawWhere } = filter;
    const qb = this.tableRepo.createQueryBuilder('NeustarOrderInsights');
    if (rawWhere) {
      qb.andWhere(rawWhere);
    }
    if (start) {
      qb.andWhere(`TO_CHAR(startdate, 'YYYY-MM-DD') >= '${start}'`);
    }
    if (end) {
      qb.andWhere(`TO_CHAR(enddate, 'YYYY-MM-DD') <= '${end}'`);
    }
    return await qb.getCount();
  }

  async getRecord(id: number) {
    return await this.tableRepo.findOne({ where: { id: id } });
  }
}
