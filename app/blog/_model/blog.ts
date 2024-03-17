import { ImageInfo } from '@/app/_model';

export interface PostItemInfo {
  id: string;
  thumbnailImg?: ImageInfo;
  title: string;
  summary: string;
  date: string;
}
