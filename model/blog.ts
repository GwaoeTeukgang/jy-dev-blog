import { ImageInfo } from '@/model/index';

export interface Tag {
  id: number;
  tagLabel: string;
}

export interface PostItemInfo {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  thumbnail: ImageInfo | null;
  slug: string;
  tags: Tag[];
  nextPage?: number | null;
}

export interface PostItemRequest {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  thumbnail: { id: number } | null;
  slug: string;
  tags: Tag[];
  content: string;
}

export interface PostDetail extends PostItemInfo {
  content: string;
}
