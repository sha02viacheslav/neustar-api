import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TemplateUpload } from './template-upload';

@Entity('neustarfalloutretry')
export class NeustarFalloutRetry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  previous_attempt_id: number;

  @ManyToOne(() => TemplateUpload)
  @JoinColumn({ name: 'previous_attempt_id', referencedColumnName: 'rowid' })
  neustarTemplateUpload: TemplateUpload;
}
