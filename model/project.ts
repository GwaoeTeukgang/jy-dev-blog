import { ImageInfo } from '@/model/index';
import { Tag } from '@/model/blog';

export interface ProjectItemInfo {
  id: string;
  projectName: string;
  projectSummary: string;
  memberNum: number;
  startDate: string;
  endDate: string;
  githubLink: string;
  demoLink: string;
  slug: string;
  image: ImageInfo[];
  skill: Tag[];
}
