import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NeustarController } from './neustar.controller';
import { NeustarService } from './neustar.service';
import { NeustarFalloutRetry } from '../../entities/fallout-retry.entity';
import { TemplateUpload } from '../../entities/template-upload';

@Module({
  imports: [TypeOrmModule.forFeature([TemplateUpload, NeustarFalloutRetry])],
  controllers: [NeustarController],
  providers: [NeustarService],
})
export class NeustarModule {}
