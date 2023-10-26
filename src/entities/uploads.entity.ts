import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { NeustarTrackerMapping } from './tracker-mapping.entity';

@Entity('neustartrackerupload')
export class NeustarTrackerUpload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carrier: string;

  @Column()
  tracker: string;

  @Column()
  filename: string;

  @Column('bytea')
  file_buffer: Buffer;

  @ManyToOne(() => NeustarTrackerMapping)
  @JoinColumn({ name: 'carrier', referencedColumnName: 'carrier' })
  @JoinColumn({ name: 'tracker', referencedColumnName: 'tracker' })
  neustarTrackerMapping: NeustarTrackerMapping;
}
