import { PaginationResponse, Response } from '@/model';
import client from '@/lib/client';
import { ProjectItemInfo } from '@/model/project';

export const getProjects = (): Promise<
  PaginationResponse<ProjectItemInfo[]>
> => {
  return client.get(
    `/api/projects?sort[0]=createdAt:desc&populate[0]=image&populate[1]=skill&populate[2]=projectIcon`,
  );
};

export const getProject = (
  slug: string,
): Promise<Response<ProjectItemInfo>> => {
  return client.get(
    `/api/projects/${slug}?populate[0]=image&populate[1]=skill&populate[2]=projectIcon&populate[3]=features`,
  );
};
