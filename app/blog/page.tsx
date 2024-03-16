import MyInfo from "@/app/blog/_component/MyInfo";
import Category from "@/app/blog/_component/Category";
import PostList from "@/app/blog/_component/PostList";
import EnterMotion from "@/app/_component/EnterMotion";

export default function Blog() {
    return <div>
        <EnterMotion>
            <MyInfo/>
        </EnterMotion>
        <div>
            <div>
                2024.03~ Since
            </div>
            <div>
                0 Posts
            </div>
            <div>
                0 Visit
            </div>
        </div>
        <div>
            <Category/>
            <PostList/>
        </div>
    </div>
}
