import { Body, Controller, Post } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { BrightnessService } from './brightness.service';

@Controller('brightness')
export class BrightnessController {
  constructor(private readonly brightnessService: BrightnessService, private readonly loggerService: LoggerService) {
    this.loggerService.info('Starting brightness controller.');
  }

  @Post()
  async setBrightness(@Body('sunlight') sunlight: string) {
    this.loggerService.info(`Starting setBrightness with sunlight level: ${sunlight}.`);

    try {
      const sunlightValue = Number.parseInt(sunlight);
      if (!sunlightValue) return { brightness: 0 };

      const brightness = await this.brightnessService.setBrightness(1, sunlightValue);

      this.loggerService.info(`Running setBrightness: ${brightness}/${sunlight} (brightness/sunlight)`);
      return { brightness };
    } catch (err) {
      this.loggerService.error(err);

      return { brightness: 'error' };
    }
  }
}
