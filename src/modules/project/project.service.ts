import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<ProjectDocument>,
  ) {}

  async findAll() {
    try {
      const projects = await this.projectModel.find().exec();
      return projects;
    } catch (e) {
      console.error(e);
      throw new Error('Error fetching projects');
    }
  }
}
