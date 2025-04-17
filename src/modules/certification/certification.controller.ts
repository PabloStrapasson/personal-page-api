import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CertificationService } from './certification.service';
import {
  CreateCertificationDto,
  CertificationResponse,
  CreateCertificationSchema,
} from './dto/create-certification.dto';

@Controller('certification')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) {}

  @Get()
  async findAll() {
    return await this.certificationService.findAll();
  }

  @Post()
  async createCertification(
    @Body() certification: CreateCertificationDto,
  ): Promise<CertificationResponse> {
    try {
      const validationData = CreateCertificationSchema.safeParse(certification);
      if (!validationData.success) {
        throw new BadRequestException(validationData.error.message);
      }

      const newCertification =
        await this.certificationService.createCertification(certification);

      return {
        message: 'Certification created successfully',
        certification: newCertification,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete(':id/delete')
  async deleteCertification(
    @Param('id') certificationId: string,
  ): Promise<CertificationResponse> {
    try {
      const deletedCertification =
        await this.certificationService.deleteCertification(certificationId);

      return {
        message: 'Certification deleted successfully',
        certification: deletedCertification,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
