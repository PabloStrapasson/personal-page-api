import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  tecnologies: string[];

  @Prop({ required: true })
  git_repository: string;

  @Prop()
  description: string;

  @Prop()
  deploy_url: string;

  @Prop()
  image_name: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
