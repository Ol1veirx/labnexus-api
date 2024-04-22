import { Module } from '@nestjs/common';
import { ExperimentService } from './experiment.service';
import { ExperimentController } from './experiment.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ExperimentController],
  providers: [ExperimentService, PrismaService],
})
export class ExperimentModule {}
