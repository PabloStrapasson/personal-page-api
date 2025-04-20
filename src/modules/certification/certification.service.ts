import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Certification,
  CertificationDocument,
} from './schemas/certification.schema';
import { CreateCertificationDto } from './dto/create-certification.dto';

@Injectable()
export class CertificationService {
  constructor(
    @InjectModel(Certification.name)
    private certificationModel: Model<CertificationDocument>,
  ) {}

  async findAll() {
    try {
      const certifications = await this.certificationModel.find().exec();
      return certifications;
    } catch (e) {
      console.error(e);
      throw new Error('Error fetching certifications');
    }
  }

  async createCertification(certification: CreateCertificationDto) {
    try {
      const newCertification = new this.certificationModel(certification);
      return await newCertification.save();
    } catch (e) {
      console.error(e);
      throw new Error('Error creating certification');
    }
  }

  async updateCertification(
    name: string,
    certification: Partial<CreateCertificationDto>,
  ) {
    try {
      const updatedCertification = await this.certificationModel
        .findOneAndUpdate({ name }, certification)
        .exec();

      if (!updatedCertification) {
        throw new NotFoundException('Certification not found');
      }

      return updatedCertification;
    } catch (e) {
      console.error(e);
      throw new Error('Error updating certification');
    }
  }

  async deleteCertification(id: string) {
    try {
      const deletedCertification = await this.certificationModel
        .findByIdAndDelete(id)
        .exec();
      if (!deletedCertification) {
        throw new Error('Certification not found');
      }

      return deletedCertification;
    } catch (e) {
      console.error(e);
      throw new Error('Error deleting certification');
    }
  }
}
