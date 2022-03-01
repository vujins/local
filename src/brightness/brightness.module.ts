import { Module } from '@nestjs/common';
import { BrightnessService } from './brightness.service';
import { BrightnessController } from './brightness.controller';
import { LoggerService } from '../logger/logger.service';

@Module({
  controllers: [BrightnessController],
  providers: [BrightnessService, LoggerService],
})
export class BrightnessModule {}
