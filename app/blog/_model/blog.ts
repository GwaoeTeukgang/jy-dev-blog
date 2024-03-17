import { ImageInfo } from '@/app/_model';

export interface PostItemInfo {
  id: string;
  sumnail?: ImageInfo;
  title: string;
  summary: string;
  date: string;
}
