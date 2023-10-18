import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('neustartemplateupload')
export class NeustarTemplateUpload {
  @PrimaryGeneratedColumn()
  rowid: number;

  @Column('text')
  carrierid: string;

  @Column('text')
  tracker_file_path: string;

  @Column('text')
  template_upload_status: string;

  @Column()
  total_count: number;

  @Column()
  invalid_pon_count: number;

  @Column()
  success_count: number;

  @Column()
  error_count: number;

  @Column()
  validation_count: number;

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

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  execution_time: string;
}
