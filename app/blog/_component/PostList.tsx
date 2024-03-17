import PostItem from '@/app/blog/_component/PostItem';
import { tv } from 'tailwind-variants';
import { PostItemInfo } from '@/app/blog/_model/blog';

const postListContainer = tv({
  base: ['flex', 'gap-10', 'justify-start', 'p-10', 'flex-wrap'],
});

const data: PostItemInfo = {
  id: 'id',
  title: 'Title',
  summary:
    'CodeChronicles is a platform for developers to share their coding journey, insights, and expertise. Dive into the world of programming with our in-depth technical articles and stay updated with the latest trends in the tech industry.',
  date: '2024.03.17',
};
export default function PostList() {
  return (
    <div className={postListContainer()}>
      <PostItem {...data} />
      <PostItem {...data} />
      <PostItem {...data} />
      <PostItem {...data} />
    </div>
  );
}
