import { ImageInfo, PaginationResponse, Response, ReturnMap } from '@/model';
import { PostDetail, PostItemInfo, PostItemRequest, Tag } from '@/model/blog';
import client, { adminClient } from '@/lib/client';
import { AxiosResponse } from 'axios';

export const getPaginatedPost = (
  page: number,
  pageSize: number,
  sort: string = 'createdAt',
): Promise<PaginationResponse<PostItemInfo[]>> => {
  return client.get(
    `/api/posts?sort[0]=${sort}:desc&populate[0]=thumbnail&populate[1]=tags&pagination[1]=${page}&pagination[0]=${pageSize}`,
  );
};

export const getPostDetail = (slug: string): Promise<Response<PostDetail>> => {
  return client.get(
    `/api/posts/${slug}?populate[0]=thumbnail&populate[1]=tags`,
  );
};

export const getTags = (): Promise<PaginationResponse<Tag[]>> => {
  return client.get('/api/tags');
};

export const createTag = (
  data: ReturnMap<{ tagLabel: string }>,
): Promise<PaginationResponse<Tag>> => {
  return adminClient.post('/api/tags', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const uploadImage = (
  formData: FormData,
): Promise<AxiosResponse<ImageInfo[]>> => {
  return adminClient.post('/api/upload/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const createNewPost = (
  data: ReturnMap<PostItemRequest>,
): Promise<PostDetail> => {
  return adminClient.post(
    '/api/posts?populate[0]=thumbnail&populate[1]=tags',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
