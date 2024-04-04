import { Test, TestingModule } from '@nestjs/testing';
import { ZipCodeApiController } from './zip-code-api.controller';
import { ZipCodeApiService } from './zip-code-api.service';

describe('ZipCodeApiController', () => {
  let controller: ZipCodeApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZipCodeApiController],
      providers: [ZipCodeApiService],
    }).compile();

    controller = module.get<ZipCodeApiController>(ZipCodeApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
