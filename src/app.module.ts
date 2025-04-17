import { Module } from '@nestjs/common';
import { ProjectModule } from './modules/project/project.module';
import { CertificationModule } from './modules/certification/certification.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
    ProjectModule,
    CertificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
