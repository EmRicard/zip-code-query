import { Test, TestingModule } from '@nestjs/testing';
import { ZipCodeApiService } from './zip-code-api.service';

describe('ZipCodeApiService', () => {
  let service: ZipCodeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZipCodeApiService],
    }).compile();

    service = module.get<ZipCodeApiService>(ZipCodeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
