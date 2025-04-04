import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './modules/project/project.module';
import { CertificationModule } from './modules/certification/certification.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ProjectModule,
    CertificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
