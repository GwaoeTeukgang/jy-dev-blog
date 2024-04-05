import ProjectModal from '@/app/project/_component/ProjectModal';
import { Props } from '@/model';

export default function Page({ params }: Props) {
  return <ProjectModal slug={params.slug} />;
}
