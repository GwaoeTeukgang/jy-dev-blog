'use client';

import Image from 'next/image';
import BookmarkOn from '@/public/icon/bookmark_on.png';
import BookmarkOff from '@/public/icon/bookmark_off.png';
import postItemStyle from '@/app/blog/_component/postItem.style';
import { PostItemInfo } from '@/app/blog/_model/blog';
import useBookmarkStore from '@/store/useBookmarkStore';
import { useEffect, useState } from 'react';

export default function PostItem(item: PostItemInfo) {
  const { container, title, summary, footer, bookmark, thumbnail } =
    postItemStyle();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkStore();
  const [isMarked, setIsMarked] = useState<boolean>(false);

  useEffect(() => {
    setIsMarked(bookmarks.includes(item.id));
  }, [bookmarks, item.id]);

  const toggleBookmark = () => {
    if (isMarked) {
      addBookmark(item.id);
      localStorage.setItem('bookmarks', bookmarks.join(','));
    } else {
      removeBookmark(item.id);
      localStorage.setItem('bookmarks', bookmarks.join(','));
    }
    setIsMarked(!isMarked);
  };

  return (
    <div className={container()}>
      <Image
        src={'https://placehold.co/300x350?text=No+Image'}
        className={thumbnail()}
        alt={''}
        width={300}
        height={350}
      />
      <div style={{ padding: '12px' }}>
        <p className={title()}>{item.title}</p>
        <p className={summary()}>{item.summary}</p>
        <div className={footer()}>
          <p>{item.date}</p>
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
