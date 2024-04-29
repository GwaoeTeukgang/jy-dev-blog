import ProjectModal from '@/app/project/_component/ProjectModal';
import { Props } from '@/model';
import type { Metadata } from 'next';
import { getProject } from '@/lib/api/project';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getProject(params.slug);

  return {
    title: `Juniverse Dev - Project: ${data.projectName}`,
    description: data.projectSummary,
    keywords: data.skills.map((it) => it.tagLabel),
    openGraph: {
      images: [data.projectIcon?.url ?? data.image[0].url],
    },
  };
}
export default function Page({ params }: Props) {
  return <ProjectModal slug={params.slug} isInterceptor={false} />;
}
