'use client';

import Image from 'next/image';
import BookmarkOn from '@/public/icon/bookmark_on.png';
import BookmarkOff from '@/public/icon/bookmark_off.png';
import postItemStyle from '@/app/blog/_component/postItem.style';
import { PostItemInfo } from '@/app/blog/_model/blog';
import useBookmarkStore from '@/store/useBookmarkStore';
import { useState } from 'react';

export default function PostItem(item: PostItemInfo) {
  const { container, title, summary, footer, bookmark } = postItemStyle();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkStore();
  const [isMarked, setIsMarked] = useState(bookmarks.includes(item.id));

  const onBookmark = () => {
    isMarked ? removeBookmark(item.id) : addBookmark(item.id);
    setIsMarked(!isMarked);
  };

  return (
    <div className={container()}>
      <Image
        src={'https://placehold.co/300x420?text=No+Image'}
        alt={''}
        width={300}
        height={420}
      />
      <div style={{ padding: '12px' }}>
        <p className={title()}>{item.title}</p>
        <p className={summary()}>{item.summary}</p>
        <div className={footer()}>
          <p>{item.date}</p>
          <button onClick={onBookmark} className={bookmark()}>
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
