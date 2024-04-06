import ProjectModal from '@/app/project/_component/ProjectModal';
import { Props } from '@/model';
import type {Metadata} from "next";
import {getProject} from "@/lib/api/project";


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {data} = await getProject(params.slug);

  return {
    title: data.data.projectName,
    description: data.data.projectSummary,
    keywords: data.data.skill.map((it) => it.tagLabel),
    openGraph: {
      images: [data.data.projectIcon?.url ?? ''],
    },
  };
}
export default function Page({ params }: Props) {
  return <ProjectModal slug={params.slug} />;
}
