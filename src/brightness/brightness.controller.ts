import { Body, Controller, Post } from '@nestjs/common';
import { BrightnessService } from './brightness.service';

@Controller('brightness')
export class BrightnessController {
  constructor(private readonly brightnessService: BrightnessService) {}

  @Post()
  async setBrightness(@Body('sunlight') sunlight: string) {
    const sunlightValue = Number.parseInt(sunlight);
    if (!sunlightValue) return { brightness: 0 };

    const brightness = await this.brightnessService.setBrightness(
      1,
      sunlightValue,
    );

    console.log(
      `Running setBrightness: ${brightness}/${sunlight} (brightness/sunlight)`,
    );
    return { brightness };
  }
}
