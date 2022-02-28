import { Test, TestingModule } from '@nestjs/testing';
import { BrightnessController } from './brightness.controller';
import { BrightnessService } from './brightness.service';

describe('BrightnessController', () => {
  let controller: BrightnessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrightnessController],
      providers: [BrightnessService],
    }).compile();

    controller = module.get<BrightnessController>(BrightnessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
