import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailConfig } from './config/mailer-config';
import { DatabaseModule } from './database.module';
import { AuthController } from './routes/auth/auth.controller';
import { AuthModule } from './routes/auth/auth.module';
import { NeustarModule } from './routes/neustar/neustar.module';
import { TrackerMappingModule } from './routes/tracker-mapping/tracker-mapping.module';

@Module({
  imports: [DatabaseModule, AuthModule, NeustarModule, TrackerMappingModule, MailerModule.forRoot(MailConfig())],
  controllers: [AuthController, AppController],
  providers: [AppService],
})
export class AppModule {}
