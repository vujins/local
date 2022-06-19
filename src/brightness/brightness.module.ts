import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HassioService } from '../hassio/hassio.service';
import { LoggerService } from '../logger/logger.service';
import { BrightnessController } from './brightness.controller';
import { BrightnessService } from './brightness.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [BrightnessController],
  providers: [BrightnessService, LoggerService, HassioService],
})
export class BrightnessModule {}
