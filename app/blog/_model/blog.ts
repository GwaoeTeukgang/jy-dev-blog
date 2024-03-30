import {ImageInfo} from '@/app/_model';


export interface Tag {
    id: number;
    tagLabel: string
}

export interface PostItemInfo {
    id: string;
    title: string;
    summary: string;
    createdAt: string;
    thumbnail: ImageInfo | null;
    slug: string;
    tags: Tag[];
}

export interface PostDetail extends PostItemInfo {
    content: string;
}