import { ImageInfo } from '@/app/_model/index';

export type ExpertiseLevel = 'STRONG' | 'KNOWLEDGEABLE' | 'EXPERIENCE';
export interface SkillStack {
  level: ExpertiseLevel;
  skillName: string;
  skillIcon: ImageInfo;
}
export interface Skill {
  skillStacks: SkillStack[];
}
