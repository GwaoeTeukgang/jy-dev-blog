import { getProjects } from '@/lib/api/project';


export async function generateStaticParams() {
  const {data} = await getProjects();
  
  return data.map((post) => ({
    slug: post.slug,
  }));
}import RootPage from '@/app/project/page';

export default function Default() {
  return null;
}
