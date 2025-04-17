import { z } from 'zod';
import { Project } from '../schemas/project.schema';

export const CreateProjectDtoSchema = z.object({
  name: z.string().nonempty().min(1).max(100),
  tecnologies: z.string().array().nonempty(),
  git_repository: z.string().nonempty().url(),
  description: z.string().optional(),
  deploy_url: z.string().url().optional(),
});

export class CreateProjectDto {
  name: string;
  tecnologies: string[];
  git_repository: string;
  description: string;
  deploy_url: string;
}

export interface ProjectResponse {
  message: string;
  project: Project;
}
