import { z } from 'zod';
import { Certification } from '../schemas/certification.schema';

export const CreateCertificationSchema = z.object({
  name: z.string().nonempty().min(1).max(100),
  workload: z.number().positive(),
  completion_date: z.string().date(),
  description: z.string().optional(),
  certificate_link: z.string().url().optional(),
});

export class CreateCertificationDto {
  name: string;
  workload: number;
  completion_date: Date;
  description: string;
  certificate_link: string;

  constructor(
    name: string,
    workload: number,
    completion_date: Date,
    description: string,
    certificate_link: string,
  ) {
    this.name = name;
    this.workload = workload;
    this.completion_date = completion_date;
    this.description = description;
    this.certificate_link = certificate_link;
  }
}

export interface CertificationResponse {
  message: string;
  certification: Certification;
}
