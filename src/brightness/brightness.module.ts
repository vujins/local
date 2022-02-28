import { Module } from '@nestjs/common';
import { BrightnessService } from './brightness.service';
import { BrightnessController } from './brightness.controller';

@Module({
  controllers: [BrightnessController],
  providers: [BrightnessService],
})
export class BrightnessModule {}
