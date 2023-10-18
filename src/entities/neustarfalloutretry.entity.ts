import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { NeustarTemplateUpload } from './neustartemplateupload';

@Entity('neustarfalloutretry')
export class NeustarFalloutRetry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  previous_attempt_id: number;

  @ManyToOne(() => NeustarTemplateUpload)
  @JoinColumn({ name: 'previous_attempt_id', referencedColumnName: 'rowid' })
  neustarOrderInsights: NeustarTemplateUpload;
}
