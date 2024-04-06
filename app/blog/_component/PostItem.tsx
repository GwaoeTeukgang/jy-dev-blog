'use client';

import Image from 'next/image';
import BookmarkOn from '@/public/icon/bookmark_on.png';
import BookmarkOff from '@/public/icon/bookmark_off.png';
import postItemStyle from '@/app/blog/_component/postItem.style';
import { PostItemInfo } from '@/model/blog';
import useBookmarkStore from '@/store/useBookmarkStore';
import React, { useMemo } from 'react';
import TagItem from '@/app/blog/_component/TagItem';
import { useRouter } from 'next/navigation';
import PostThumbnail from '@/app/_component/PostThumbnail';

export default function PostItem(item: PostItemInfo) {
  const { container, title, summary, footer, bookmark, thumbnail, date } =
    postItemStyle();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkStore();
  const isMarked = useMemo(
    () => bookmarks.includes(item.id.toString()),
    [bookmarks, item],
  );
  const router = useRouter();

  const toggleBookmark = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    const id = item.id.toString();
    isMarked ? removeBookmark(id) : addBookmark(id);
  };

  const moveDetail = () => {
    router.push(`blog/post/${item.slug}`);
  };

  return (
    <div className={container()} onClick={moveDetail}>
      <PostThumbnail
        img={item.thumbnail}
        title={item.title}
        className={thumbnail()}
      />
      <div style={{ padding: '12px' }}>
        <p className={title()}>{item.title}</p>
        <p className={summary()}>{item.summary}</p>
        <div className={'flex flex-wrap p-2 gap-1'}>
          {(item.tags ?? []).map((it) => (
            <TagItem label={it.tagLabel} key={it.tagLabel} />
          ))}
        </div>
        <div className={footer()}>
          <p className={date()}>{item.createdAt}</p>
          <button onClick={toggleBookmark} className={bookmark()}>
            {isMarked ? (
              <Image
                src={BookmarkOn}
                alt={'Bookmark On'}
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={BookmarkOff}
                alt={'Bookmark Off'}
                width={20}
                height={20}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
