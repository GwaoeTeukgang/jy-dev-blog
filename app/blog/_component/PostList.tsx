'use client';
import PostItem from '@/app/blog/_component/PostItem';
import { tv } from 'tailwind-variants';
import { PostItemInfo } from '@/app/blog/_model/blog';
import { useEffect } from 'react';
import useBookmarkStore from '@/store/useBookmarkStore';

const postListContainer = tv({
  base: [
    'grid',
    'grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]',
    'gap-4',
    'p-10',
    'm-auto',
  ],
});

const data: PostItemInfo = {
  id: 'id',
  title: 'Title',
  summary:
    'CodeChronicles is a platform for developers to share their coding journey, insights, and expertise. Dive into the world of programming with our in-depth technical articles and stay updated with the latest trends in the tech industry.',
  date: '2024.03.17',
};

export default function PostList() {
  const { initBookmarks } = useBookmarkStore();
  useEffect(() => {
    const bookmarks = (localStorage.getItem('bookmarks') ?? '').split(',');
    initBookmarks(bookmarks ?? []);
  }, [initBookmarks]);
  return (
    <div className={postListContainer()}>
      <PostItem {...data} id={'1'} />
      <PostItem {...data} id={'2'} />
      <PostItem {...data} id={'3'} />
      {/*<PostItem {...data} id={'4'}/>*/}
    </div>
  );
}
