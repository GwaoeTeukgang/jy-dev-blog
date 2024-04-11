import MyInfo from '@/app/blog/_component/MyInfo';
import PostList from '@/app/blog/_component/PostList';
import blogStyle from '@/app/blog/blog.style';
import { PostItemInfo } from '@/model/blog';
import { PaginationReturnMap } from '@/model';
import { getPaginatedPost } from '@/lib/api/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juniverse Dev - Blog',
  description: "Jiyoon's Blog",
};
const getPostList = async (): Promise<PaginationReturnMap<PostItemInfo[]>> => {
  try {
    const { data } = await getPaginatedPost(1, 10);
    return data;
  } catch (e) {
    throw new Error('포스트 리스트 정보를 불러오는데 실패했습니다.');
  }
};
export default async function Blog() {
  const { blogInfo, blogInfoItem } = blogStyle();
  const { data, meta } = await getPostList();
  return (
    <main>
      <MyInfo />
      <div className={blogInfo()}>
        <div className={blogInfoItem()}>
          <p>Since</p>
          <p>2024.03~</p>
        </div>
        <div className={blogInfoItem()}>
          <p>Post</p>
          <p>{meta.pagination.total ?? 0}</p>
        </div>
        {/*<div className={blogInfoItem()}>*/}
        {/*  <p>Viewer</p>*/}
        {/*  <p>0</p>*/}
        {/*</div>*/}
      </div>
      <div>
        <PostList postList={data} meta={meta} />
      </div>
    </main>
  );
}
