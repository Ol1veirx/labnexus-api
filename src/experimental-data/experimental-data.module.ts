import { Module } from '@nestjs/common';
import { ExperimentalDataService } from './experimental-data.service';
import { ExperimentalDataController } from './experimental-data.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ExperimentalDataController],
  providers: [ExperimentalDataService, PrismaService],
})
export class ExperimentalDataModule {}
