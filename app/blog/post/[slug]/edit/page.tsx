import BlogPostEditor from '@/app/blog/post/_component/editor/BlogPostEditor';
import { PostDetail } from '@/model/blog';
import { getPostDetail } from '@/lib/api/blog';
import { Props } from '@/model';

const getPost = async (slug: string): Promise<PostDetail> => {
  try {
    const { data } = await getPostDetail(slug);
    return data.data;
  } catch (e) {
    throw new Error('포스트 정보를 불러오는데 실패했습니다.\n' + e);
  }
};

export default async function EditPage({ params }: Props) {
  const postData = await getPost(params.slug);

  return <BlogPostEditor />;
}
