'use client';

import PostItem from '@/app/blog/_component/PostItem';
import { tv } from 'tailwind-variants';
import { PostItemInfo } from '@/model/blog';
import { useEffect, useRef, useState } from 'react';
import useBookmarkStore from '@/store/useBookmarkStore';
import { AnimatePresence, motion } from 'framer-motion';
import { MetaPagination } from '@/model';
import usePaginationInfo from '@/hooks/usePaginationInfo';
import { getPaginatedPost } from '@/lib/api/blog';

const callMorePost = async (
  setPagination: (data: PostItemInfo[], meta: MetaPagination) => void,
  page: number,
) => {
  try {
    const { data } = await getPaginatedPost(page, 10);
    return setPagination(data.data, data.meta);
  } catch (e) {
    console.error(e);
  }
};

const postListContainer = tv({
  base: [
    'grid',
    'grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]',
    'gap-4',
    'p-10',
    'max-sm:p-2',
    'mb-4',
    'max-h-[1200px]',
    'overflow-y-scroll',
    'min-h-10',
  ],
});

export default function PostList({
  postList,
  meta,
}: {
  postList: PostItemInfo[];
  meta: MetaPagination;
}) {
  const { initBookmarks } = useBookmarkStore();
  const targetElement = useRef<HTMLDivElement>(null);
  const { list, pageInfo, setPagination, hasMorePost } =
    usePaginationInfo<PostItemInfo>(postList, meta);

  useEffect(() => {
    const bookmarks = (localStorage.getItem('bookmarks') ?? '').split(',');
    initBookmarks(bookmarks ?? []);
  }, [initBookmarks]);

  useEffect(() => {
    const observeCallBack = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callMorePost(setPagination, pageInfo.page + 1);
        }
      });
    };
    const observer = new IntersectionObserver(observeCallBack, {
      root: null,
      threshold: 0.1,
    });

    const target = targetElement.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [list, pageInfo, setPagination, hasMorePost]);

  return (
    <AnimatePresence mode={'wait'}>
      <ul className={postListContainer()}>
        {list.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ ...animate(index).initial }}
            animate={animate(index).animate}
          >
            <PostItem {...item} />
          </motion.li>
        ))}
      </ul>
      <div className={'w-full h-2 bg-transparent'} ref={targetElement} />
    </AnimatePresence>
  );
}

const animate = (delay: number) => ({
  initial: {
    translateY: 50,
    opacity: 0,
    transition: { duration: 0.3 },
  },
  animate: {
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: (0.2 * delay) % 10 },
  },
});
