import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NeustarController } from './neustar.controller';
import { NeustarService } from './neustar.service';
import { NeustarOrderInsights } from '../../entities/neustarorderinsights.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NeustarOrderInsights])],
  controllers: [NeustarController],
  providers: [NeustarService],
})
export class NeustarModule {}
