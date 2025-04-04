import { Controller, Get } from '@nestjs/common';
import { CertificationService } from './certification.service';

@Controller('certification')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) {}

  @Get()
  async findAll() {
    return await this.certificationService.findAll();
  }
}
