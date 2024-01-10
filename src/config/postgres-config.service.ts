import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Secrets } from '../main';
import { environment } from './../environment';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRESHOST,
      port: (process.env.POSTGRESPORT as any) || 5432,
      username: environment.local ? process.env.POSTGRESUSERNAME : Secrets.postGresDbUser,
      password: environment.local ? process.env.POSTGRESPASSWORD : Secrets.postGresDbPassword,
      database: process.env.POSTGRESDBNAME,
      entities: [],
      autoLoadEntities: true,
    };
  }
}
