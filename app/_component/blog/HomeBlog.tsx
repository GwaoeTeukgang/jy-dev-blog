import { getPaginatedPost } from '@/lib/api/blog';
import PostThumbnail from '@/app/_component/PostThumbnail';
import { PostItemInfo } from '@/model/blog';
import * as style from './homeBlog.style';
import TagItem from '@/app/blog/_component/TagItem';
import React from 'react';
import Link from 'next/link';

const getMostRecentPost = async (): Promise<PostItemInfo> => {
  try {
    const { data } = await getPaginatedPost(1, 1);
    return data.data[0];
  } catch (e) {
    throw new Error('');
  }
};
export default async function HomeBlog() {
  const data = await getMostRecentPost();

  return (
    <>
      {data ? (
        <Link href={`/blog/post/${data.slug}`} className={style.container()}>
          <PostThumbnail
            img={data.thumbnail}
            title={data.title}
            className={'max-sm:w-full'}
          />
          <div className={style.postInfo()}>
            <div>
              <h3 className={'font-bold text-xl'}>{data.title}</h3>
              <p className={'text-gray-400 mb-2'}>{data.createdAt}</p>
              <p>{data.summary}</p>
            </div>
            <div className={'flex flex-wrap p-2 gap-1'}>
              {data.tags
                .slice(0, 5)
                ?.map((it) => <TagItem key={it.id} label={it.tagLabel} />)}
              {data.tags.length > 5 && <TagItem label={'...'} />}
            </div>
          </div>
        </Link>
      ) : (
        <div className={`h-80 flex justify-center items-center`}>
          {' '}
          No Content
        </div>
      )}
    </>
  );
}
