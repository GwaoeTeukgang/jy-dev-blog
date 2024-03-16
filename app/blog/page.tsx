import MyInfo from "@/app/blog/_component/MyInfo";
import Category from "@/app/blog/_component/Category";
import PostList from "@/app/blog/_component/PostList";
import EnterMotion from "@/app/_component/EnterMotion";
import blogStyle from "@/app/blog/blog.style";

export default function Blog() {
    const {blogInfo, blogInfoItem} = blogStyle();
    return <div>
        {/*<EnterMotion>*/}
            <MyInfo/>
        {/*</EnterMotion>*/}
        <div className={blogInfo()}>
            <div className={blogInfoItem()}>
                <p>Since</p>
                <p>2024.03~</p>
            </div>
            <div className={blogInfoItem()}>
                <p>Post</p>
                <p>0</p>
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
}
