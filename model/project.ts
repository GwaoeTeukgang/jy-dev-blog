import { ImageInfo } from '@/model/index';
import { Tag } from '@/model/blog';

export interface ProjectItemInfo {
  id: string;
  projectName: string;
  projectSummary: string;
  detail: string;
  contribution: string;
  features: { id: string; featuresLabel: string }[];
  memberNum: number;
  startDate: string;
  endDate: string;
  githubLink: string;
  demoLink: string;
  slug: string;
  image: ImageInfo[];
  projectIcon: ImageInfo | null;
  skill: Tag[];
}
