// src/app/models/project.model.ts

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink: string;
  Live_View?: string;
}
