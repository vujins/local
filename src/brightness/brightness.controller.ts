import { Body, Controller, Post } from '@nestjs/common';
import { BrightnessService } from './brightness.service';

@Controller('brightness')
export class BrightnessController {
  constructor(private readonly brightnessService: BrightnessService) {}

  @Post()
  setBrightness(@Body('sunlight') sunlight: number) {
    console.log({ sunlight });

    return { sunlight };
  }
}
