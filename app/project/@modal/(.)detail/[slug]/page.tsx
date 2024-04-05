import ProjectModal from '@/app/project/_component/ProjectModal';
import { Props } from '@/model';

export default async function ProjectDetailModal({ params }: Props) {
  return <ProjectModal slug={params.slug} />;
}
