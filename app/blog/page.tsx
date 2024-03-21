import MyInfo from '@/app/blog/_component/MyInfo';
import Category from '@/app/blog/_component/Category';
import PostList from '@/app/blog/_component/PostList';
import blogStyle from '@/app/blog/blog.style';
import client from "@/lib/client";
import {PostItemInfo} from "@/app/blog/_model/blog";
import {PaginationResponse} from "@/app/_model";


const getPaginatedPost = async (): Promise<PaginationResponse<PostItemInfo[]>> => {
    return client.get('/api/posts?sort[0]=createdAt&pagination[page]=1&pagination[pageSize]=10');
}
export default async function Blog() {
    const {blogInfo, blogInfoItem} = blogStyle();
    const {data} = await getPaginatedPost();
    return (
        <div>
            <MyInfo/>
            <div className={blogInfo()}>
                <div className={blogInfoItem()}>
                    <p>Since</p>
                    <p>2024.03~</p>
                </div>
                <div className={blogInfoItem()}>
                    <p>Post</p>
                    <p>{data.meta.pagination.total}</p>
                </div>
                <div className={blogInfoItem()}>
                    <p>Viewer</p>
                    <p>0</p>
                </div>
            </div>
            <div>
                <Category/>
                <PostList/>
            </div>
        </div>
    );
}
