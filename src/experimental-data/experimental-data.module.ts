import { Module } from '@nestjs/common';
import { ExperimentalDataService } from './experimental-data.service';
import { ExperimentalDataController } from './experimental-data.controller';

@Module({
  controllers: [ExperimentalDataController],
  providers: [ExperimentalDataService],
})
export class ExperimentalDataModule {}
