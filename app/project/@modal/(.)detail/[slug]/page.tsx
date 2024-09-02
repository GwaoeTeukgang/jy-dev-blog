import ProjectModal from '@/app/project/_component/ProjectModal';
import { Props } from '@/model';
import { getProject, getProjects } from '@/lib/api/project';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const {data} = await getProjects();
  
  return data.map((post) => ({
    slug: post.slug,
  }));
}
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

export default async function ProjectDetailModal({ params }: Props) {
  return <ProjectModal slug={params.slug} />;
}
