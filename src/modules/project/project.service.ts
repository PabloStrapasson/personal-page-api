import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async findAll() {
    try {
      const projects = await this.projectModel.find().exec();
      return projects;
    } catch (e) {
      console.error(e);
    }
  }
}
