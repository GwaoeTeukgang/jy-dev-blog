import {ImageInfo} from '@/app/_model';

export interface PostItemInfo {
    id: string;
    title: string;
    summary?: string;
    createdAt: string;
    thumbnail?: ImageInfo;
    tags: {
      tagLabel: string
    } []
}
