import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NeustarController } from './neustar.controller';
import { NeustarService } from './neustar.service';
import { NeustarFalloutRetry } from '../../entities/neustarfalloutretry.entity';
import { NeustarOrderInsights } from '../../entities/neustarorderinsights.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NeustarOrderInsights, NeustarFalloutRetry])],
  controllers: [NeustarController],
  providers: [NeustarService],
})
export class NeustarModule {}
