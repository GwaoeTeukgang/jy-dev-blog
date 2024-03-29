import {ImageInfo} from '@/app/_model';

export interface PostItemInfo {
    id: string;
    title: string;
    summary?: string;
    createdAt: string;
    thumbnail?: ImageInfo;
    slug: string;
    tags: {
        id: number;
        tagLabel: string
    } []
}

export interface PostDetail extends PostItemInfo {
    content: string;
}