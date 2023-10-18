import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NeustarController } from './neustar.controller';
import { NeustarService } from './neustar.service';
import { NeustarFalloutRetry } from '../../entities/neustarfalloutretry.entity';
import { NeustarTemplateUpload } from '../../entities/neustartemplateupload';

@Module({
  imports: [TypeOrmModule.forFeature([NeustarTemplateUpload, NeustarFalloutRetry])],
  controllers: [NeustarController],
  providers: [NeustarService],
})
export class NeustarModule {}
