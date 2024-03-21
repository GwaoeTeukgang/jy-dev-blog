import { ImageInfo } from '@/app/_model/index';

export type ExpertiseLevel = 'STRONG' | 'KNOWLEDGEABLE' | 'EXPERIENCE';
export interface Skill {
  level: ExpertiseLevel;
  skillName: string;
  skillIcon: ImageInfo;
}