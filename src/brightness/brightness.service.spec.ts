import { Test, TestingModule } from '@nestjs/testing';
import { BrightnessService } from './brightness.service';

describe('BrightnessService', () => {
  let service: BrightnessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrightnessService],
    }).compile();

    service = module.get<BrightnessService>(BrightnessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
