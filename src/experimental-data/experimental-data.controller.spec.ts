import { Test, TestingModule } from '@nestjs/testing';
import { ExperimentalDataController } from './experimental-data.controller';
import { ExperimentalDataService } from './experimental-data.service';

describe('ExperimentalDataController', () => {
  let controller: ExperimentalDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperimentalDataController],
      providers: [ExperimentalDataService],
    }).compile();

    controller = module.get<ExperimentalDataController>(ExperimentalDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
