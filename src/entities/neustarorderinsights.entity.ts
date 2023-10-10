import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TODO: update primary key

@Entity('neustarorderinsights')
export class NeustarOrderInsights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  carrierid: string;

  @Column('text')
  tracker_file_path: string;

  @Column('text')
  template_upload_status: string;

  @Column('text')
  total_count: string;

  @Column('text')
  success_count: string;

  @Column('text')
  error_count: string;

  @Column('text')
  validation_count: string;

  @Column('text')
  validation_result: string;

  @Column('text')
  processed_template_path: string;

  @Column('text')
  bot_execution_status: string;

  @Column('text')
  exception: string;

  @Column('text')
  exception_logs: string;

  @Column('text')
  start_time: string;

  @Column('text')
  end_time: string;

  @Column('text')
  execution_time: string;

  @Column('text')
  invalid_pon_count: string;
}
