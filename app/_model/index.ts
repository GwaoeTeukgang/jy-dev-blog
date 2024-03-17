export interface ImageInfo {
  url: string;
  fileName: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Response<T> {
  data: T;
}
