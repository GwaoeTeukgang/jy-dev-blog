'use client';

import {tv} from 'tailwind-variants';
import {PostItemInfo} from '@/model/blog';
import {Fragment, useEffect, useState} from 'react';
import {getPaginatedPost} from '@/lib/api/blog';
import {InfiniteData, useInfiniteQuery} from "@tanstack/react-query";
import {useInView} from "react-intersection-observer";
import PostItem from "@/app/blog/_component/PostItem";
import {AnimatePresence, motion} from "framer-motion";
import blogStyle from "@/app/blog/blog.style";
import {Pagination} from "@/model";


type Props = { pageParam?: number };
const getPostList = async ({pageParam = 1}: Props) => {
  try {
      const {data} = await getPaginatedPost(pageParam, 10);
      const isLastPage = data.meta.pagination.page >= data.meta.pagination.pageCount;
      return data.data.map(it => ({...it, nextPage: isLastPage ? null : data.meta.pagination.page + 1}));
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

export default function PostList() {
    const { blogInfo, blogInfoItem } = blogStyle();
    const [loading, setLoading] = useState(false);
    const [pageInfo, setPageInfo] = useState<Pagination>({
        page: 1,
        total: 0,
        pageCount: 0,
        pageSize: 0
    });
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery<PostItemInfo[], Object, InfiniteData<PostItemInfo[]>>({
        queryKey: ['posts'],
        initialPageParam: 1, //@ts-ignore
        queryFn: getPostList,
        getNextPageParam: (lastPage) =>lastPage.at(0)?.nextPage,
    });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

    useEffect(() => {
        (async function () {
            const {data} = await getPaginatedPost(1, 1);
            setPageInfo(data.meta.pagination);
        })();
    }, []);

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && !isFetchingNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage]);


  return (
      <>
          <div className={blogInfo()}>
              <div className={blogInfoItem()}>
                  <p>Since</p>
                  <p>2024.03~</p>
              </div>
              <div className={blogInfoItem()}>
                  <p>Post</p>
                  <p>{pageInfo.total ?? 0}</p>
              </div>
          </div>
          <ul className={postListContainer()}>
              {data?.pages?.map((list, i) => (
                  <Fragment key={i}>
                      {list.map((item, index) =>
                          <AnimatePresence mode={'wait'} key={item.id}>
                              <motion.li
                                  initial={{...animate(index).initial}}
                                  animate={animate(index).animate}
                              >
                                  <PostItem {...item} />
                              </motion.li>
                          </AnimatePresence>
                      )}
                  </Fragment>

              ))}
          </ul>
          <div className={'w-full h-2 bg-transparent'} ref={ref}/>
      </>
  );
}

const animate = (delay: number) => ({
    initial: {
        translateY: 50,
        opacity: 0,
        transition: {duration: 0.3},
    },
    animate: {
        translateY: 0,
        opacity: 1,
        transition: {duration: 0.3, delay: (0.2 * delay) % 10},
    },
});
