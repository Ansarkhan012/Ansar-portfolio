// types/project.ts
export interface ProjectType {
  id: string;
  name: string;
  title?: string; // Main heading from homepage
  description: string;
  image: string;
  techStack: string[];
  completionDate: string;
  progress: number; // 0 to 100
  githubUrl?: string;
  liveUrl?: string;
}