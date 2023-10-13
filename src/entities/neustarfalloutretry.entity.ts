import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { NeustarOrderInsights } from './neustarorderinsights.entity';

@Entity('neustarfalloutretry')
export class NeustarFalloutRetry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  previous_attempt_id: number;

  @ManyToOne(() => NeustarOrderInsights)
  @JoinColumn({ name: 'previous_attempt_id' })
  neustarOrderInsights: NeustarOrderInsights;
}
