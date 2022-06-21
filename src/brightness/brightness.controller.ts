import { Controller, Get } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HassioService } from '../hassio/hassio.service';
import { LoggerService } from '../logger/logger.service';
import { BrightnessService } from './brightness.service';

@Controller('brightness')
export class BrightnessController {
  shouldRunInterval = true;

  constructor(
    private readonly brightnessService: BrightnessService,
    private readonly hassioService: HassioService,
    private readonly loggerService: LoggerService,
  ) {
    this.loggerService.info('Starting brightness controller.');
  }

  @Get()
  public stopInterval() {
    this.shouldRunInterval = false;
  }

  @Get()
  public startInterval() {
    this.shouldRunInterval = true;
  }

  @Get()
  public toggleInterval() {
    this.shouldRunInterval = !this.shouldRunInterval;
  }

  @Cron(CronExpression.EVERY_30_SECONDS, { name: 'sunlightJob' })
  private async querySunlightCron() {
    this.loggerService.info(`Running sunlight interval job. Skipping: ${!this.shouldRunInterval}`);

    if (!this.shouldRunInterval) return;

    const sunlight = await this.hassioService.getSunlight();

    this.loggerService.info(`Got sunlight from hassio: ${sunlight}`);

    this.brightnessService.setBrightness(1, sunlight);
    this.brightnessService.setBrightness(2, sunlight);
    this.brightnessService.setBrightness(3, sunlight);
  }
}
