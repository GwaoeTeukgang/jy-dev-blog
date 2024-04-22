import { getPaginatedPost } from '@/lib/api/blog';
import { HOST_URL } from '@/lib/constants';

export async function generateSitemaps() {
  const {data} = await getPaginatedPost(1, 5000);
  return Array.from({length: data.meta.pagination.pageCount}, (_, index) => ({id: index}));
}

export default async function sitemap({id}: { id: number }) {
  const {data} = await getPaginatedPost(id + 1, 5000);
  return data.data.map(({slug, updatedAt}) => ({
    url: `${HOST_URL}/blog/post/${slug}`,
    lastModified: updatedAt,
  }));
}