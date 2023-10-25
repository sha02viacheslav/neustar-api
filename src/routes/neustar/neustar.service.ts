import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filter, Pagination } from '../../@core/models';
import { NeustarFalloutRetry } from '../../entities/fallout-retry.entity';
import { TemplateUpload } from '../../entities/template-upload';

@Injectable()
export class NeustarService {
  constructor(
    @InjectRepository(TemplateUpload)
    private tableRepo: Repository<TemplateUpload>,
    @InjectRepository(NeustarFalloutRetry)
    private falloutRetryRepo: Repository<NeustarFalloutRetry>,
  ) {}

  async getPostgresDataWithRawQuery(filter: Filter): Promise<Pagination<TemplateUpload>> {
    const { pageSize, pageIndex, search, sort, order, start, end, rawWhere } = filter;
    const qb = this.tableRepo
      .createQueryBuilder('templateUpload')
      .leftJoinAndSelect(`templateUpload.falloutRetrys`, `falloutRetrys`, `retry_attempted = false`);

    if (start) {
      qb.andWhere(`TO_CHAR(start_time, 'YYYY-MM-DD') >= '${start}'`);
    }
    if (end) {
      qb.andWhere(`TO_CHAR(end_time, 'YYYY-MM-DD') <= '${end}'`);
    }
    if (search) {
      qb.andWhere(
        `(templateUpload.carrierid LIKE '%${search}%' OR templateUpload.tracker_file_path LIKE '%${search}%')`,
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
      qb.orderBy('templateUpload.start_time', order == 'asc' ? 'ASC' : 'DESC');
    } else if (sort) {
      qb.orderBy(`templateUpload.${sort}`, order == 'asc' ? 'ASC' : 'DESC');
    }
    qb.addOrderBy(`templateUpload.rowid`, 'DESC');

    const [data, totalCount] = await qb.getManyAndCount();

    return {
      pageIndex: pageIndex,
      pageSize: pageSize,
      totalCount: totalCount,
      data: data,
    };
  }

  async getPostgresCountWithRawQuery(filter: Filter) {
    const { start, end, rawWhere } = filter;
    const qb = this.tableRepo.createQueryBuilder('NeustarTemplateUpload');
    if (rawWhere) {
      qb.andWhere(rawWhere);
    }
    if (start) {
      qb.andWhere(`TO_CHAR(start_time, 'YYYY-MM-DD') >= '${start}'`);
    }
    if (end) {
      qb.andWhere(`TO_CHAR(end_time, 'YYYY-MM-DD') <= '${end}'`);
    }
    return await qb.getCount();
  }

  async getRecord(id: number) {
    return await this.tableRepo.findOne({ where: { rowid: id } });
  }

  async retryFallout(previousAttemptId: number) {
    return await this.falloutRetryRepo.save({ previous_attempt_id: previousAttemptId });
  }
}
