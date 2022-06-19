import { Test, TestingModule } from '@nestjs/testing';
import { HassioService } from './hassio.service';

describe('HassioService', () => {
  let service: HassioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HassioService],
    }).compile();

    service = module.get<HassioService>(HassioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
