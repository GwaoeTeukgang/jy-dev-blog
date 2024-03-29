import {PaginationResponse, Response} from "@/app/_model";
import {PostDetail, PostItemInfo} from "@/app/blog/_model/blog";
import client from "@/lib/client";

export const getPaginatedPost = (page: number, pageSize: number): Promise<PaginationResponse<PostItemInfo[]>> => {
    return client.get(`/api/posts?sort[0]=createdAt:desc&populate[0]=thumbnail&populate[1]=tags&pagination[1]=${page}&pagination[0]=${pageSize}`);
}

export const getPostDetail = (slug: string): Promise<Response<PostDetail>> => {
    return client.get(`/api/posts/${slug}?populate[0]=thumbnail&populate[1]=tags`);
}