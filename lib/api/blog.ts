import {ImageInfo, PaginationReturnMap, ReturnMap} from '@/model';
import {ImageResponse, PostDetail, PostItemInfo, PostItemRequest, Tag} from '@/model/blog';
import client, {adminClient} from '@/lib/client';

export const getPaginatedPost = async (
    page: number,
    pageSize: number,
    sort: string = 'createdAt',
): Promise<PaginationReturnMap<PostItemInfo[]>> => {
    try {
        const response = await client(
            `/api/posts?sort[0]=${sort}:desc&populate[0]=thumbnail&populate[1]=tags&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
            {
                method: 'GET',
                cache: 'no-cache'
            }
        );

        return response as unknown as PaginationReturnMap<PostItemInfo[]>;
    } catch (e) {
        return Promise.reject(e);
    }
};

export const getPostDetail = async (slug: string): Promise<ReturnMap<PostDetail>> => {
    try {
        const response = await client(
            `/api/posts/${slug}?populate[0]=thumbnail&populate[1]=tags`,
            {
                method: 'GET',
                next: {
                    revalidate: 3600 * 24
                }
            }
        );

        return response as unknown as ReturnMap<PostDetail>;
    } catch (e) {
        return Promise.reject(e);
    }
};

export const getTags = async (): Promise<PaginationReturnMap<Tag[]>> => {
    try {
        const response = await client(
            '/api/tags',
            {
                method: 'GET',
            }
        );

        return response as unknown as PaginationReturnMap<Tag[]>;
    } catch (e) {
        return Promise.reject(e);
    }
};

export const createTag = async (
    data: ReturnMap<{ tagLabel: string }>,
): Promise<PaginationReturnMap<Tag>> => {
    try {
        const response = await adminClient(
            '/api/tags',
            {
                method: 'POST',
                body: JSON.stringify(data)
            }
        );

        return response as unknown as PaginationReturnMap<Tag>;
    } catch (e) {
        return Promise.reject(e);
    }
};

export const uploadImage = async (
    formData: FormData,
): Promise<ImageInfo[]> => {
    try {
        const response = await adminClient(
            '/api/upload/',
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        return response as unknown as ImageInfo[];
    } catch (e) {
        return Promise.reject(e);
    }
};

export const createNewPost = async (
    data: ReturnMap<PostItemRequest>,
): Promise<PostDetail> => {
    try {
        const response = await adminClient(
            '/api/posts?populate[0]=thumbnail&populate[1]=tags',
            {
                method: 'POST',
                body: JSON.stringify(data)
            }
        );
        return response as unknown as PostDetail;
    } catch (e) {
        return Promise.reject(e);
    }
};

export const uploadCloudImage = async (
    formData: FormData
): Promise<ImageResponse> => {
    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
            {
                method: 'POST',
                body: formData
            }
        );
        return await response.json() as unknown as ImageResponse;
    } catch (e) {
        return Promise.reject(e);
    }
};