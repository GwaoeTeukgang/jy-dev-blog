import { AxiosError, AxiosResponse } from 'axios';

export interface ImageFormat {
  ext: string;
  url: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface ImageInfo {
  id: number;
  name: string;
  url: string;
  mime: string;
  formats: {
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  };
}

export interface ReturnMap<T> {
  data: T;
}

export interface PaginationReturnMap<T> {
  data: T;
  meta: MetaPagination;
}

export interface ErrorMap {}

export type ErrorResponse = AxiosError<ErrorMap>;

export type PaginationResponse<T> = AxiosResponse<PaginationReturnMap<T>>;

export type BaseResponse<T> =  {
  status: number;
  statusText: string;
  data: T;
};

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface MetaPagination {
  pagination: Pagination;
}

export interface Props {
  params: { slug: string };
}
