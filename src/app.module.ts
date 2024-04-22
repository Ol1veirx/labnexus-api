import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { SampleModule } from './sample/sample.module';
import { ExperimentModule } from './experiment/experiment.module';
import { MemberModule } from './member/member.module';
import { ExperimentalDataModule } from './experimental-data/experimental-data.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ProjectModule, SampleModule, ExperimentModule, MemberModule, ExperimentalDataModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
