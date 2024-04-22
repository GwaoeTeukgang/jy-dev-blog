import MyInfo from '@/app/blog/_component/MyInfo';
import PostList from '@/app/blog/_component/PostList';
import blogStyle from '@/app/blog/blog.style';
import { PostItemInfo } from '@/model/blog';
import { PaginationReturnMap } from '@/model';
import { getPaginatedPost } from '@/lib/api/blog';
import type { Metadata } from 'next';
import RQProvider from "@/app/_provider/RQProvider";

export const metadata: Metadata = {
  title: 'Juniverse Dev - Blog',
  description: "Jiyoon's Blog",
};
export default function Blog() {

  return (
    <main>
      <MyInfo />
      <RQProvider>
        <PostList />
      </RQProvider>
    </main>
  );
}
