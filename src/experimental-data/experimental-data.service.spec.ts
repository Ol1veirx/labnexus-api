import { Test, TestingModule } from '@nestjs/testing';
import { ExperimentalDataService } from './experimental-data.service';

describe('ExperimentalDataService', () => {
  let service: ExperimentalDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperimentalDataService],
    }).compile();

    service = module.get<ExperimentalDataService>(ExperimentalDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
