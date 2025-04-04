import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type CertificationDocument = HydratedDocument<Certification>;

@Schema()
export class Certification {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  workload: number;

  @Prop({ type: Date })
  completion_date: Date;

  @Prop()
  description: string;

  @Prop()
  certificate_link: string;
}

export const CertificationSchema = SchemaFactory.createForClass(Certification);
