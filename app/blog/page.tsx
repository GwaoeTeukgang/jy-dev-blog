import MyInfo from '@/app/blog/_component/MyInfo';
import PostList from '@/app/blog/_component/PostList';
import blogStyle from '@/app/blog/blog.style';
import type {Metadata} from 'next';
import RQProvider from "@/app/_provider/RQProvider";
import {getPaginatedPost} from "@/lib/api/blog";
import {Pagination} from "@/model";
export const metadata: Metadata = {
    title: 'Juniverse Dev - Blog',
    description: "Jiyoon's Blog",
};

const getPageInfo = async (): Promise<Pagination> => {
    const {meta} = await getPaginatedPost(1,1);
    return meta.pagination;
}

const Loading = () => <div>Loading..</div>
export default async function Blog() {
    const {blogInfo, blogInfoItem} = blogStyle();
    const pageInfo = await getPageInfo();
    return (
        <main>
            <MyInfo/>
            <div className={blogInfo()}>
                <div className={blogInfoItem()}>
                    <p>Since</p>
                    <p>2024.03~</p>
                </div>
                <div className={blogInfoItem()}>
                    <p>Post</p>
                    <p>{pageInfo.total ?? 0}</p>
                </div>
            </div>
            <RQProvider>
                <PostList/>
            </RQProvider>
        </main>
    );
}
