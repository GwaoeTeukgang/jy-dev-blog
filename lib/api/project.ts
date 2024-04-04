import { PaginationResponse } from '@/model';
import { PostItemInfo } from '@/model/blog';
import client from '@/lib/client';
import { ProjectItemInfo } from '@/model/projectItemInfo';

export const getProjects = (): Promise<
  PaginationResponse<ProjectItemInfo[]>
> => {
  return client.get(
    `/api/projects?sort[0]=createdAt:desc&populate[0]=image&populate[1]=tags`,
  );
};
