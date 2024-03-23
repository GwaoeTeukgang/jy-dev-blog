'use client';

import Image from 'next/image';
import BookmarkOn from '@/public/icon/bookmark_on.png';
import BookmarkOff from '@/public/icon/bookmark_off.png';
import postItemStyle from '@/app/blog/_component/postItem.style';
import {PostItemInfo} from '@/app/blog/_model/blog';
import useBookmarkStore from '@/store/useBookmarkStore';
import {useMemo} from 'react';
import TagItem from "@/app/blog/_component/TagItem";

export default function PostItem(item: PostItemInfo) {
    const {container, title, summary, footer, bookmark, thumbnail, date} =
        postItemStyle();
    const {bookmarks, addBookmark, removeBookmark} = useBookmarkStore();
    const isMarked = useMemo(() => bookmarks.includes(item.id.toString()), [bookmarks]);

    const toggleBookmark = () => {
        const id = item.id.toString();
        isMarked ? removeBookmark(id) : addBookmark(id);
    };

    return (
        <div className={container()}>
            {
                item.thumbnail
                    ? <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_END_POINT}${item.thumbnail.url}`}
                        className={thumbnail()}
                        alt={''}
                        width={300}
                        height={350}
                    />
                    : <div className={`${thumbnail()} p-4 bg-gradient-to-br from-purple-300 to-pink-500`}>
                        {item.title}
                    </div>
            }

            <div style={{padding: '12px'}}>
                <p className={title()}>{item.title}</p>
                <p className={summary()}>{item.summary}</p>
                <div className={footer()}>
                    <p className={date()}>{item.createdAt}</p>
                    <button onClick={() => toggleBookmark()} className={bookmark()}>
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
                <div className={'flex flex-wrap'}>
                    {(item.tags??[]).map(it =>
                        <TagItem label={it.tagLabel} key={it.tagLabel}/>
                    )}
                </div>
            </div>
        </div>
    );
}
