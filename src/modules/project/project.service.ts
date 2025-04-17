import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';

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

  async createProject(project: CreateProjectDto) {
    try {
      const newProject = new this.projectModel(project);
      return await newProject.save();
    } catch (e) {
      console.error(e);
      throw new Error('Error creating project');
    }
  }

  async deleteProject(id: string) {
    try {
      const deletedProject = await this.projectModel
        .findByIdAndDelete(id)
        .exec();
      if (!deletedProject) {
        throw new Error('Project not found');
      }

      return deletedProject;
    } catch (e) {
      console.error(e);
      throw new Error('Error deleting project');
    }
  }
}
