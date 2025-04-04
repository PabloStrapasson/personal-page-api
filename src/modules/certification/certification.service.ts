import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Certification } from './schemas/certification.schema';

@Injectable()
export class CertificationService {
  constructor(
    @InjectModel(Certification.name)
    private certificationModel: Model<Certification>,
  ) {}

  async findAll() {
    try {
      const certifications = await this.certificationModel.find().exec();
      return certifications;
    } catch (e) {
      console.error(e);
    }
  }
}
