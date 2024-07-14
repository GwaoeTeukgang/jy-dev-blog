import {BaseResponse, PaginationReturnMap} from '@/model';
import client from '@/lib/client';
import {ProjectItemInfo} from '@/model/project';

export const getProjects = async (): Promise<PaginationReturnMap<ProjectItemInfo[]>> => {
    try {
        const response = await client(
            `/api/projects?sort[0]=createdAt:desc&populate[0]=image&populate[1]=skills&populate[2]=projectIcon`,
            {
                method: 'GET',
                next: {
                    revalidate: 3600 * 24
                }
            }
        );

        return response as unknown as PaginationReturnMap<ProjectItemInfo[]>;
    } catch (e) {
        return Promise.reject(e);
    }
};

export const getProject = async (
    slug: string,
): Promise<BaseResponse<ProjectItemInfo>> => {
    try {
        const response = await client(
            `/api/projects/${slug}?populate[0]=image&populate[1]=skills&populate[2]=projectIcon&populate[3]=features`,
            {
                method: 'GET',
                next: {
                    revalidate: 3600 * 24
                }
            }
        );

        return response as unknown as BaseResponse<ProjectItemInfo>;
    } catch (e) {
        return Promise.reject(e);
    }
};
