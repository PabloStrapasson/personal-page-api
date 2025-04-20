import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import {
  CreateProjectDto,
  CreateProjectDtoSchema,
  ProjectResponse,
} from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll() {
    const projects = await this.projectService.findAll();
    return projects;
  }

  @Post()
  async createProject(
    @Body() project: CreateProjectDto,
  ): Promise<ProjectResponse> {
    try {
      const validationData = CreateProjectDtoSchema.safeParse(project);
      if (!validationData.success) {
        throw new BadRequestException(validationData.error.message);
      }

      const newProject = await this.projectService.createProject(project);

      return {
        message: 'Project created successfully',
        project: newProject,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Patch('/update')
  async updateProject(
    @Body('name') name: string,
    @Body('project') project: Partial<CreateProjectDto>,
  ): Promise<ProjectResponse> {
    try {
      const updatedProject = await this.projectService.updateProject(
        name,
        project,
      );

      return {
        message: 'Project updated successfully',
        project: updatedProject,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete(':id/delete')
  async deleteProject(
    @Param('id') projectId: string,
  ): Promise<ProjectResponse> {
    try {
      const deletedProject = await this.projectService.deleteProject(projectId);

      return {
        message: 'Project deleted successfully',
        project: deletedProject,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
